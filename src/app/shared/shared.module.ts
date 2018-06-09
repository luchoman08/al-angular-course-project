import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/material.module';
import { RouterModule } from '@angular/router';
import {  } from '@app/shared/pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  YoutubeVideoComponent,
  SingleDataDialogEditOrAddComponent,
  YoutubeVideoDialogComponent,
  CapitalizePipe,
  ImageURLPipe,
  FirstWordPipe
} from '@app/shared/';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SearchInputComponent } from './search-input/search-input.component';


@NgModule({
  declarations: [
    SingleDataDialogEditOrAddComponent,
    YoutubeVideoComponent,
    YoutubeVideoDialogComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe,
    NavbarComponent,
    FooterComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ImageURLPipe, FirstWordPipe, CapitalizePipe],
  exports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

    SingleDataDialogEditOrAddComponent,
    YoutubeVideoComponent,
    YoutubeVideoDialogComponent,
    CapitalizePipe,
    FirstWordPipe,
    ImageURLPipe,
    NavbarComponent,
    FooterComponent,
    SearchInputComponent
  ],
  entryComponents: [SingleDataDialogEditOrAddComponent, YoutubeVideoDialogComponent]
})
export class SharedModule { }
