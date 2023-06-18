import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;

  userCount:string = "100";
  teamCount:string = "100";
  professionalMemberCount: string = "100";
  subjectMatterCount: string = "100";


  activeUser:any[] = [
    {
      "name": "Aksahy"
    },
    {
      "name": "Aksahy"
    },
    {
      "name": "Aksahy"
    },
    {
      "name": "Aksahy"
    },
    {
      "name": "Aksahy"
    },
    {
      "name": "Aksahy"
    },
  ]
  private activatedRoute = inject(ActivatedRoute);
  constructor(private menuController: MenuController) {
    this.menuController.enable(true);
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
