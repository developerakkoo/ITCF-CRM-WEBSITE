import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';
import { environment } from 'src/environments/environment';

interface UserData {
  DOB: string;
  DocUrl: string[];
  Documents: string[];
  Name: string;
  Phone: string;
  Specialization: string;
  address: string;
  createdAt: string;
  email: string;
  isActive: boolean;
  isBlocked: boolean;
  password: string;
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
  user: UserData = {} as UserData;
  userForm!:FormGroup;
  constructor(private http: HttpClient,
    private router: Router,
    private fb : FormBuilder,
    private data: DataService,
    private loadingController: LoadingController,
    private route: ActivatedRoute) { 
      this.userId = this.route.snapshot.paramMap.get("id");
      this.userForm = this.fb.group({
        DOB: [''],
        email: [''],
        password: [''],
        Name: [''],
        Phone: [''],
        Specialization: [''],
        address: [''],


      })

      this.getAllDetails(this.userId);

    
    }
  ngOnInit() {
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
    this.http.get<UserData>(environment.API +`/subMatterEx/${userId}`)
    .subscribe({
      next:(user:any) => {
          console.log(user);
          
        this.user = user['user'];

        this.userForm.get('Name')!.setValue(this.user['Name']);
  
        this.userForm.get('Phone')!.setValue(this.user.Phone);
        this.userForm.get('email')!.setValue(this.user.email);
        this.userForm.get('password')!.setValue(this.user.password);
        this.userForm.get('address')!.setValue(this.user.address);
        this.userForm.get('DOB')!.setValue(this.user.DOB);
        this.userForm.get('Specialization')!.setValue(this.user.Specialization);
        this.loadingController.dismiss();
        
      },
      error:(err) =>{
        console.log(err);
        this.loadingController.dismiss();
        
      }
    })
  }




  updatePassword(){
    this.presentLoading();
    this.http.put(environment.API + `/subMatterEx/add/credential/${this.adminId}`,{
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
        this.http.put(environment.API +`/update/subMatterEx/${this.userId}`, obj)
        .subscribe({
          next:(value:any) =>{
            console.log(value);
        this.loadingController.dismiss();

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
