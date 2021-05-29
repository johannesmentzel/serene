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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IntroComponent,
    MenuComponent,
    ContentComponent,
    ContentWelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
