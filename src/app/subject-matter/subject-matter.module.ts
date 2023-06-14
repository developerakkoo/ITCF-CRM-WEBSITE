import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectMatterPageRoutingModule } from './subject-matter-routing.module';

import { SubjectMatterPage } from './subject-matter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectMatterPageRoutingModule
  ],
  declarations: [SubjectMatterPage]
})
export class SubjectMatterPageModule {}
