import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

export class PerfilPage implements OnInit {

  public focus = {
    experiencia: { color: "success", estado: true },
    estudio: { color: "medium", estado: false },
    contacto: { color: "medium", estado: false }
  }

  constructor() { }

  ngOnInit() {
  }

  target(id: string) {
    this.selecTarget()
    switch (id) {
      case 'estudio':this.focus.estudio.color="success",this.focus.estudio.estado=true
      break;
       case 'experiencia':this.focus.experiencia.color="success",this.focus.experiencia.estado=true
      break;
      case 'contacto':this.focus.contacto.color="success",this.focus.contacto.estado=true
      break;
    }

  }
  private selecTarget() {
    this.focus={
      experiencia: { color: "medium", estado: false },
      estudio: { color: "medium", estado: false },
      contacto: { color: "medium", estado: false }
    }
  }
}
