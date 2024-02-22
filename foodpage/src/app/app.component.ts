import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = 'foodpage';

name!:string
em!:string
pass!:string

show() {
  alert(`successfully submitted \n ${this.name} \n ${this.em} \n ${this.pass}`)
}
}
