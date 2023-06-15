import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-associate-matter',
  templateUrl: './associate-matter.page.html',
  styleUrls: ['./associate-matter.page.scss'],
})
export class AssociateMatterPage implements OnInit {
  activeUser:any[] = [
   
  ]

  getUserSub!: Subscription;
  constructor(private router:Router,
              private http: HttpClient,
              ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getAllMember();
  }
  getAllMember(){
    this.http.get(environment.API + "/getAll/associateMember")
    .subscribe({
      next:(value:any) =>{
        console.log(value);
        this.activeUser = value['associateMember'];
      },
      error:(error:any) =>{
        console.log(error);
        
      }
    })
  }

  goToDetails(id:any){
    this.router.navigate(['associate-matter', 'details', id]);
  }

}
