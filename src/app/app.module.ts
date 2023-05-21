import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ApiFormComponent } from './home-page/api-form/api-form.component';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CountriesInfoDisplayComponent } from './home-page/countries-info-display/countries-info-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ApiFormComponent,
    CountriesInfoDisplayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
