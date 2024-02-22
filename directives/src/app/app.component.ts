import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';

counterBox = false
receive: any;
  counter(){
    if (this.counterBox){
      this.counterBox = false
      document.body.classList.remove('overlay')
    }else{
      this.counterBox = true
      document.body.classList.add('overlay')
    }
  }

  formBox = false
  form(){
    if (this.formBox){
      this.formBox = false
      document.body.classList.remove('overlay')
    }else{
      this.formBox = true
      document.body.classList.add('overlay')
    }
  }

  
value!:string
switchBox = false
switch(){
  if (this.switchBox){
    this.switchBox = false
    document.body.classList.remove('overlay')
  }else { 
    this.switchBox = true
    document.body.classList.add('overlay')
  }
}



  // counter app code starts
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
  // counter app code ends


  // form app starts here
  name!:any
  em!:any
  pass!:any
  @ViewChild(HeaderComponent) headCount!:HeaderComponent
  recieved() {
    alert(`successfully submitted \n ${this.headCount.name} \n ${this.headCount.em} \n ${this.headCount.pass}`)
  }
    // form app ends here


}

