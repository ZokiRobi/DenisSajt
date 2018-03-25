import { BiografijaComponent } from './biografija/biografija.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projekti', component: ProjektiComponent },
    { path: 'biografija', component: BiografijaComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];