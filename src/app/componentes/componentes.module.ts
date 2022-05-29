import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia/experiencia.component';



@NgModule({
  declarations: [ExperienciaComponent],
  imports: [
    CommonModule
  ],exports:[ExperienciaComponent]
})
export class ComponentesModule { }
