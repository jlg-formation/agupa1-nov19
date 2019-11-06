import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { LegalComponent } from './legal/legal.component';


@NgModule({
  declarations: [HomeComponent, LegalComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
