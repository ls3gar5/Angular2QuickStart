import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<h1>{{name}}</h1>`,
})
export class HeaderComponent  { name = 'Hola Mundo'; }