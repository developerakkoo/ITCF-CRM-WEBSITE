import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  userId:any;
  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { 
                this.userId = this.route.snapshot.paramMap.get("id");
                this.getAllDetails(this.userId);
              }

  ngOnInit() {

  }

  getAllDetails(userId:any){

  }
}
