import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent, FooterComponent } from './layout';
import {
    SingleDataDialogEditOrAddComponent
} from './common-components/single-data-dialog-edit-or-add/single-data-dialog-edit-or-add.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SingleDataDialogEditOrAddComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    SingleDataDialogEditOrAddComponent
  ]
})
export class SharedModule { }
