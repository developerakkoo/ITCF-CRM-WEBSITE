import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssociateMatterPage } from './associate-matter.page';

const routes: Routes = [
  {
    path: '',
    component: AssociateMatterPage
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssociateMatterPageRoutingModule {}
