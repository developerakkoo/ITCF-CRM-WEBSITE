import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectMatterPage } from './subject-matter.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectMatterPage
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
export class SubjectMatterPageRoutingModule {}
