import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponentComponent } from './main-component/main-component.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponentComponent
  ],
  providers : [
  ],
})
/**
 * This module contains all principal and page-complete components of the page
 * like login pages or home pages
 */
export class MainModule { }
