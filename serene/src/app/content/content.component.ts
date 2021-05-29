import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MenuContentService } from "../menu/menu-content.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  activeContent$: Observable<string> = this.menuContentService.contentList$.pipe(
    map((items) => items.find((item) => item.isVisible === true).name)
  );

  constructor(private readonly menuContentService: MenuContentService) {}

  ngOnInit() {}
}
