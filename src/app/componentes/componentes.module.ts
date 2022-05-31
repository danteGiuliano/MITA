import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { IonicModule } from '@ionic/angular';
import { EstudioComponent } from './estudio/estudio.component';
import { ContactoComponent } from './contacto/contacto.component';



@NgModule({
  declarations: [ExperienciaComponent,EstudioComponent,ContactoComponent],
  imports: [
    CommonModule,IonicModule
  ],exports:[ExperienciaComponent,IonicModule,EstudioComponent,ContactoComponent]
})
export class ComponentesModule { }
