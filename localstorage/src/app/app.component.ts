import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'localstorage';
  
  nombre:string = "Leo";
  
  persona = {
    nombre: "Juan",
    edad: 18,
    coord:{
      lat:10,
      lng:-10 
    }
  }

  
}
