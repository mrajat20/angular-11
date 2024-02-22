import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(public wine:HttpClient) { }

  getData(){
    return this.wine.get('https://api.sampleapis.com/wines/reds')
  }
}
