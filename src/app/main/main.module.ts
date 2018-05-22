import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: []
})
/**
 * This module contains all principal and page-complete components of the page
 * like login pages or home pages
 */
export class MainModule { }
