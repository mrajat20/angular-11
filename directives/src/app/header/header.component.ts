import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

name!:string
em!:string
pass!:string

show() {
  alert(`successfully submitted \n ${this.name} \n ${this.em} \n ${this.pass}`)
}
}
