import { Component, OnInit } from '@angular/core';
import { MenuContentService } from './menu-content.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  contentList$ = this.menuContentService.contentList$; 

  constructor(private readonly menuContentService: MenuContentService) { }

  ngOnInit() {
  }

  onClickButton(contentName: string): void {
   this.menuContentService.updateContentVisibility(contentName);
  }

}
