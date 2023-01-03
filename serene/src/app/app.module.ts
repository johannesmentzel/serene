import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { IntroComponent } from "./intro/intro.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./menu/menu.component";
import { ContentComponent } from "./content/content.component";
import { MatButtonModule } from "@angular/material/button";
import { ContentWelcomeComponent } from "./content-welcome/content-welcome.component";
import { GoogleMapsModule } from "@angular/google-maps";
import { ContentContactComponent } from './content-contact/content-contact.component';
import { ContentServicesComponent } from './content-services/content-services.component';
import { ContentGalleryComponent } from './content-gallery/content-gallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IntroComponent,
    MenuComponent,
    ContentComponent,
    ContentWelcomeComponent,
    ContentContactComponent,
    ContentServicesComponent,
    ContentGalleryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    GoogleMapsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
