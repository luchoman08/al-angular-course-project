import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [MainComponent]
})
export class HomeModule { }
