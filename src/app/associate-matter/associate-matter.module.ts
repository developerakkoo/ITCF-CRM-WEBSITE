import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssociateMatterPageRoutingModule } from './associate-matter-routing.module';

import { AssociateMatterPage } from './associate-matter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssociateMatterPageRoutingModule
  ],
  declarations: [AssociateMatterPage]
})
export class AssociateMatterPageModule {}
