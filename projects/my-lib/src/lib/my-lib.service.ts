import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }

  sayHello(name: string) {
    return "Hello " + name;
  }
}
