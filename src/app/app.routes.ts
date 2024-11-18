import { Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [
    { 
        path: 'Connexion',
        component: ConnexionComponent 
    },
    { 
        path: 'Home/Inscription',
        component: InscriptionComponent 
    },
    { 
        path: 'Home', 
        component: AccueilComponent 
    },
    {
        path:'',
        pathMatch:'full',
        redirectTo:'home'
    },
];