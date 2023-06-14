import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private menuCtrl: MenuController,
    private loadingController: LoadingController,
      private router:Router,
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
setTimeout(() =>{
  this.loadingController.dismiss();
  this.router.navigate(['folder']);

},3000)
    
  }

}
