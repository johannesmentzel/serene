import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
  animations: [
    trigger("intro", [
      state(
        "start",
        style({
          width: "300%",
          opacity: 0.2,
        })
      ),
      state(
        "end",
        style({
          width: "100%",
          opacity: 1,
        })
      ),
      transition("start => end", [animate("7s")]),
    ]),
  ],
})
export class IntroComponent implements OnInit {
  isStart = true;
  constructor(private readonly cd: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.isStart = false;
      this.cd.markForCheck();
    }, 1000);
  }
}
