import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFoundPageComponent } from './home/no-found-page/no-found-page.component';
import { MaintananceComponent } from './home/maintanance/maintanance.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'maintenance', component: MaintananceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NoFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
