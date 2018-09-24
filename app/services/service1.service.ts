import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { 
    let a;
  }
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }
  remove(key){
    localStorage.removeItem(key);
  }
  getK(index){
    return localStorage.key(index);
  }
}
