import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

interface ContentItems {
  [name: string]: ContentItem;
}

interface ContentItem {
  name: string;
  label: string;
  isVisible: boolean;
}

@Injectable({ providedIn: "root" })
export class MenuContentService {
  contentItems: ContentItems = {
    welcome: {
      name: "welcome",
      label: "Welcome!",
      isVisible: true,
    },
    ourServices: {
      name: "ourServices",
      label: "Our Services",
      isVisible: false,
    },
    contact: {
      name: "contact",
      label: "Contact",
      isVisible: false,
    },
  };

  contentItemsSource = new BehaviorSubject<ContentItems>(this.contentItems);
  contentItems$ = this.contentItemsSource.asObservable();

  contentList$: Observable<Array<ContentItem>> = this.contentItems$.pipe(
    map((contentItems) => Object.values(contentItems))
  );

  updateContentVisibility(name: string): void {
    const contentItems = this.contentItemsSource.getValue();
    Object.keys(contentItems).forEach(
      (key) => (contentItems[key].isVisible = key === name ? true : false)
    );

    this.contentItemsSource.next(contentItems);
  }
}
