import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes),ComponentesModule],
  exports: [RouterModule,ComponentesModule]
})
export class PerfilPageRoutingModule {}
