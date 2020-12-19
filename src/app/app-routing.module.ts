import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficherComponent } from './application/afficher/afficher.component';
import { ContactComponent } from './application/contact/contact.component';
import { CrudComponent } from './application/crud/crud.component';
import { Error404Component } from './application/error404/error404.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { FunComponent } from './application/fun/fun.component';
import { HomeComponent } from './application/home/home.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { UpdateComponent } from './application/update/update.component';


const routes: Routes = [
  {path:'updateForm/:id', component:UpdateComponent},
  {path:'afficherForm/:id', component:AfficherComponent},
  {path:'formulaire', component:FormulaireComponent},
  {path:'crud', component:CrudComponent},
  {path:'fun', component:FunComponent},
  {path:'contact', component:ContactComponent},

  {path:'tutoriel',
    children:[
      {path:':id', component:TutorielsComponent}
    ]
  },
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'**', component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
