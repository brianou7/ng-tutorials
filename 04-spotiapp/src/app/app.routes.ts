import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearhComponent } from './components/searh/searh.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearhComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]