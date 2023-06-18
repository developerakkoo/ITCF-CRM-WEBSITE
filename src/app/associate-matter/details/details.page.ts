import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';
interface User {
  AdharCard: string;
  CricketingExperience: string;
  DOB: string;
  ITR: string;
  OfficeAddress: string;
  Phone: string;
  ResidentialAddress: string;
  TandC: boolean;
  age: string;
  createdAt: string;
  email: string;
  fName: string;
  isActive: boolean;
  isBlocked: boolean;
  lName: string;
  mName: string;
  panCard: string;
  residentialProof: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {

  adminId:any;
  userId:any;
  user: User = {} as User;
  userForm!:FormGroup;
  constructor(private http: HttpClient,
              private router: Router,
              private fb : FormBuilder,
              private data: DataService,
              private loadingController: LoadingController,
              private route: ActivatedRoute) { 
                this.userId = this.route.snapshot.paramMap.get("id");
                this.userForm = this.fb.group({
                  fName: [''],
                  lName: [''],
                  mName: [''],
                  email:[''],
                  password:[''],
                  age: [0],
                  ResidentialAddress:[''],
                  OfficeAddress:[''],
                  DOB:[''],
                  CricketingExperience:[0],
                  
          
          
                })
    this.getAllDetails(this.userId);


              }

  async ngOnInit() {
    this.adminId = await this.data.get("adminId");
    console.log(`details adminId ${this.adminId}`);
    
  }

  ionViewWillLoad(){

  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
  }
  generatePassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*!';
    let password = '';
    for (let i = 0; i < 7; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(password);
    
    this.userForm.get('password')!.setValue(password);
  }
  getAllDetails(userId:any){
    this.presentLoading();
    this.http.get<User>(environment.API +`/getById/associateMember/${userId}`)
    .subscribe({
      next:(user:any) => {
          console.log(user);
          
        this.user = user['savedAssociateMember'];

        this.userForm.get('fName')!.setValue(this.user['fName']);
        this.userForm.get('lName')!.setValue(this.user.lName);
        this.userForm.get('mName')!.setValue(this.user.mName);
        this.userForm.get('age')!.setValue(this.user.age);
        this.userForm.get('email')!.setValue(this.user.email);
        this.userForm.get('ResidentialAddress')!.setValue(this.user.ResidentialAddress);
        this.userForm.get('OfficeAddress')!.setValue(this.user.OfficeAddress);
        this.userForm.get('DOB')!.setValue(this.user.DOB);
        this.userForm.get('CricketingExperience')!.setValue(this.user.CricketingExperience);
        this.loadingController.dismiss();
        
      },
      error:(err) =>{
        console.log(err);
        this.loadingController.dismiss();
        
      }
    })
  }

  updateValue(user: User){
   

  }


  updatePassword(){
    this.presentLoading();
    this.http.put(environment.API + `/add/credential/${this.adminId}`,{
      userId: this.user._id,
      password: this.userForm.value.password
    }).subscribe({
      next:(value:any) =>{
        console.log(value);
        this.loadingController.dismiss();
        
      },

      error:(error) =>{
        console.log(error);
        this.loadingController.dismiss();
        
      }
    })
  }
  submitForm() {
    if (this.userForm.valid) {
      // Perform any necessary form submission logic here
      console.log(this.userForm.value);
      ///update/associateMember/:id
      let obj = {
        ...this.userForm.value
      }
      this.presentLoading();
        this.http.put(environment.API +`/update/associateMember/${this.userId}`, obj)
        .subscribe({
          next:(value:any) =>{
            console.log(value);
            this.getAllDetails(this.userId)
            
          },
          error:(error) =>{
            console.log(error);
        this.loadingController.dismiss();
            
          }
        })     
    }
  }
  
}
