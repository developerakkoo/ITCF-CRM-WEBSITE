import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subject-matter',
  templateUrl: './subject-matter.page.html',
  styleUrls: ['./subject-matter.page.scss'],
})
export class SubjectMatterPage implements OnInit {

  activeUser:any[] =[];
  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getAllMember();
  }
  getAllMember(){
    this.http.get(environment.API + "/getAll/subMatterEx")
    .subscribe({
      next:(value:any) =>{
        console.log(value);
        this.activeUser = value['subMatterEx'];
      },
      error:(error:any) =>{
        console.log(error);
        
      }
    })
  }

  goToDetails(id:any){
    this.router.navigate(['subject-matter', 'details', id]);
  }
  
}
