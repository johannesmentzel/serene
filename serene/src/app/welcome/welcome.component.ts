import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger("intro", [
      state(
        "start",
        style({
          opacity: 0,
        })
      ),
      state(
        "end",
        style({
          opacity: 1,
        })
      ),
      transition("start => end", [animate("1s")]),
    ]),
  ],
})
export class WelcomeComponent implements OnInit {

  isStart = true;
  constructor() { }

  ngOnInit() {
  }

  onFadeInContent(): void {
    setTimeout(() => {
      this.isStart = false;
    }, 3000) 
  }

}
