import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageComponent } from './register-page.component';
import { RegisterPageRoutingModule } from './register-page-routing.module';

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
  ],
  exports: [
    RegisterPageComponent
  ]
})
export class RegisterPageModule { }
