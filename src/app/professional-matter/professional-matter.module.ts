import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessionalMatterPageRoutingModule } from './professional-matter-routing.module';

import { ProfessionalMatterPage } from './professional-matter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessionalMatterPageRoutingModule
  ],
  declarations: [ProfessionalMatterPage]
})
export class ProfessionalMatterPageModule {}
