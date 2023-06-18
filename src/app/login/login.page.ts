import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  loginSub!:Subscription;
  constructor(private menuCtrl: MenuController,
    private loadingController: LoadingController,
    private http: HttpClient,
      private router:Router,
      private data: DataService,
              private formBuilder: FormBuilder) { 
    this.menuCtrl.enable(false);
                this.loginForm = this.formBuilder.group({
                  email: [, [Validators.required, Validators.email]],
                  password:[,[Validators.required, Validators.minLength(6)]]
                })
  }

  ngOnInit() {
  }

  async presentLoading(msg:string) {
    const loading = await this.loadingController.create({
      message: msg,
    });
    await loading.present();
  }
  onSubmit(){
    console.log(this.loginForm.value);
    this.presentLoading("Logging you In....");
    this.loginSub = this.http.post(environment.API +`/superAdmin/login`, {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe({
      next:async (user:any) =>{
        console.log(user);
        this.loadingController.dismiss();
        let userId = user['postResponse']['userId'];
        await this.data.set("adminId", userId);
        this.router.navigate(['folder']);

      },
      error:(error) =>{
        console.log(error);
        this.loadingController.dismiss();
        
      }
    })



    
  }

}
