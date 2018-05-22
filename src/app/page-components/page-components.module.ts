import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './shared-components/sidebar/sidebar.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
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
