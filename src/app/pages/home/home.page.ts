import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


interface Usuario{
  nombre: string;
  apellido: string;
  educacion: string;
  nacimiento: Date;
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: any;
  
  user: Usuario ={
    nombre: '',
    apellido: '',
    educacion: '',
    nacimiento: null
  }

  constructor(private activeRouter: ActivatedRoute,
              private router: Router,
              private alertController: AlertController) {
    this.activeRouter.queryParams.subscribe(params=>{
      if(this.router.getCurrentNavigation().extras.state){
        //rescato parametros
        this.usuario = this.router.getCurrentNavigation().extras.state.nombre;
      }
    });
  }

  alert(){
    this.presentAlert();
  }

  limpiarFormulario(){
    this.user.nombre = '';
    this.user.apellido = '';
    this.user.educacion = '';
    this.user.nacimiento = null;
  }


  async presentAlert(){
    const alerta = await this.alertController.create({
      backdropDismiss: false,
      header: 'Usuario',
      message: `Su nombre es ${this.user.nombre} ${this.user.apellido}`,
      buttons: ['OK']
    });

    await alerta.present();

  }

}
