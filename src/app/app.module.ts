import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {CdkAccordionModule} from '@angular/cdk/accordion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { RightComponent } from './right/right.component';
import { InteractionComponent } from './interaction/interaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RightComponent,
    MenuComponent,
    InteractionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    CdkAccordionModule,
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
