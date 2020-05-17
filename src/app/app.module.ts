import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { DisplayorderComponent } from './displayorder/displayorder.component';
import { TrackorderComponent } from './trackorder/trackorder.component';
import { DisplaydistributorComponent } from './displaydistributor/displaydistributor.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService} from './service.service';
import { ProductspecsComponent } from './productspecs/productspecs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceorderComponent,
    UpdateorderComponent,
    DisplayorderComponent,
    TrackorderComponent,
    DisplaydistributorComponent,
    ProductspecsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
