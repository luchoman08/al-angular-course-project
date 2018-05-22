import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './main-user-page-components/main-components/sidebar/sidebar.component';
import { FooterComponent } from './main-user-page-components/main-components/footer/footer.component';
import { NavbarComponent } from './main-user-page-components/main-components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {
     SingleDataDialogEditOrAddComponent
} from './main-user-page-components/common-components/single-data-dialog-edit-or-add/single-data-dialog-edit-or-add.component';


@NgModule({
  declarations: [
      SidebarComponent,
      FooterComponent,
      RouterModule,
      NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      SidebarComponent,
      FooterComponent,
      NavbarComponent,
      SingleDataDialogEditOrAddComponent
  ],
  providers: []
})
export class PageComponentsModule { }
