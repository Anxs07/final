import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './application/error404/error404.component';
import { FooterComponent } from './application/footer/footer.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { CrudComponent } from './application/crud/crud.component';
import { FunComponent } from './application/fun/fun.component';
import { HttpClient, HttpClientModule,  } from '@angular/common/http';
import { UpdateComponent } from './application/update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YoutubePipe } from './application/fun/youtube.pipe';
import { AfficherComponent } from './application/afficher/afficher.component';
import { ContactComponent } from './application/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    TutorielsComponent,
    FormulaireComponent,
    CrudComponent,
    FunComponent,
    UpdateComponent,
    YoutubePipe,
    AfficherComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
