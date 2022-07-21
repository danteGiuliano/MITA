import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    
   public registro = new FormGroup({
     email_usuario: new FormControl(''),
     email_verificado_usuario:new FormControl(),
     password_usuario:new FormControl(),
     password_verificado_usuario:new FormControl()
   });


  constructor(private toast_registro:ToastController) { }

  ngOnInit() {
  }
   registrarse() {
    this.presentToastWithOptions()
  
  }
  iniciar_sesion(){}

  async presentToastWithOptions() {
    const toast = await this.toast_registro.create({
      header: 'MITA',
      message: 'Bienvenido <3',
      icon: 'star',
      position: 'top',
      duration:2000.
    });
    await toast.present();
    setTimeout(() => {
      
    }, 2000);

  }
}
