import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickService {

  clickedAlready:boolean=false;

  constructor() { }


  click(callback) {
    callback();

    if (!this.clickedAlready) {
      this.clickedAlready=true;
    }
  }
}
