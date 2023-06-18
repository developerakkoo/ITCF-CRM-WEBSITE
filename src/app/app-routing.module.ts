import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'analytics',
    loadChildren: () => import('./analytics/analytics.module').then( m => m.AnalyticsPageModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./team/team.module').then( m => m.TeamPageModule)
  },
  {
    path: 'subject-matter',
    loadChildren: () => import('./subject-matter/subject-matter.module').then( m => m.SubjectMatterPageModule)
  },
  {
    path: 'associate-matter',
    loadChildren: () => import('./associate-matter/associate-matter.module').then( m => m.AssociateMatterPageModule)
  },
  {
    path: 'professional-matter',
    loadChildren: () => import('./professional-matter/professional-matter.module').then( m => m.ProfessionalMatterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
