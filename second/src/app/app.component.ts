import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second';

  count:number = 0
  disableBtn = false
  numIsEven = "Even"
  evenFlag = true

  checkEvenOrOdd (){
    if (this.count%2 == 1) {
      this.numIsEven = "Odd (baraabr nahi hai )"
      this.evenFlag = false
    }else{
      this.numIsEven = "Even (barabar hai)"
      this.evenFlag = true
    }
  }

  increase(){
    if(this.count >= 50){
      this.disableBtn = true
    }else{
      this.count ++
    }
    this.checkEvenOrOdd()
  }

  decrease(){
    if(this.count == 0){
      this.disableBtn = true
    }else {
      this.count --
    }
    this.checkEvenOrOdd()
  }
  reset(){this.count = 0; this.numIsEven = ""}


}
