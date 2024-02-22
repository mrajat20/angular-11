import { Component } from '@angular/core';
import { WineService } from './wine.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wines';

  winess:any[] = []
  constructor(public ws: WineService){
    this.ws.getData().subscribe((value:any)=> this.winess = value)
  }

  cartCouont:number = 0
add(){
  this.cartCouont ++
}
remove(){
  if (this.cartCouont > 0){
    this.cartCouont --
  }
  alert(`C'mon man! Have some fun🥹`)
}

}
