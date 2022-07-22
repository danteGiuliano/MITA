import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from '../inicio-sesion/inicio-sesion.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [InicioSesionComponent],
  imports: [
    CommonModule,IonicModule
  ],exports:[InicioSesionComponent]
})
export class ModalesModule { }
