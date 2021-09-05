import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string;

  //objeto tipo router: redireccionar entre paginas
  constructor(private router: Router) { }

  ngOnInit() {
  }


  ingresar(){
    //se crea objeto de tipo NavigationExtras (interface)
    let navigationExtras: NavigationExtras ={
      state: {nombre: this.usuario }
    }

    //para ir a la pagina home
    this.router.navigate(['/home'], navigationExtras);
  }


}
