import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private pos1: number = 0;
  private pos2: number = 0;
  private pos3: number = 0;
  private pos4: number = 0;

  constructor(public navCtrl: NavController) {

  }

  public touchstart($event) {
    const touch = $event.changedTouches[0];
    this.pos3 = touch.clientX;
    this.pos4 = touch.clientY;
  }

  public touchmove($event) {
    $event.preventDefault();

    const touch = $event.changedTouches[0];
    const target = touch.target;
    // calculate the new cursor position:
    this.pos1 = this.pos3 - touch.clientX;
    this.pos2 = this.pos4 - touch.clientY;
    this.pos3 = touch.clientX;
    this.pos4 = touch.clientY;

    // set the element's new position:
    target.style.top = `${target.offsetTop - this.pos2}px`;
    target.style.left = `${target.offsetLeft - this.pos1}px`;
  }
}
