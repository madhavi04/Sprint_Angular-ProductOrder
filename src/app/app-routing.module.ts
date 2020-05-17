import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateorderComponent} from './updateorder/updateorder.component';
import{TrackorderComponent} from './trackorder/trackorder.component';
import{DisplaydistributorComponent} from './displaydistributor/displaydistributor.component';
import{DisplayorderComponent} from './displayorder/displayorder.component';
import{ProductspecsComponent} from './productspecs/productspecs.component';
const routes: Routes = [
  {path:'updateorder',component:UpdateorderComponent},
  {path:'trackorder',component:TrackorderComponent},
  {path:'displaydistributor',component:DisplaydistributorComponent},
  {path:'displayorder',component:DisplayorderComponent},
  {path:'productspecs',component:ProductspecsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
