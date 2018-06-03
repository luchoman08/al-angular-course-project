import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule, MatIconModule, MatToolbarModule, MatChipsModule, MatInputModule, MatSidenavModule, MatButtonModule } from '@angular/material';
import { CoreModule } from '@app/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    AppRoutingModule,
    MatIconModule,
    LoadingBarModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
