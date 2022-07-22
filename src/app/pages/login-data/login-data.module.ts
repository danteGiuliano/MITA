import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDataPageRoutingModule } from './login-data-routing.module';

import { LoginDataPage } from './login-data.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDataPageRoutingModule
  ],
  declarations: [LoginDataPage]
})
export class LoginDataPageModule {}
