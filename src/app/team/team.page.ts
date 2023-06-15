import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

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
    this.http.get(environment.API + "/getAll/teamAdmin")
    .subscribe({
      next:(value:any) =>{
        console.log(value);
        this.activeUser = value['userTeamAdmins'];
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
