import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './core/pages/login/login.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { CompetitionComponent } from './core/pages/competition/competition.component';
import { ProjectsComponent } from './core/pages/projects/projects.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'competition',
        component:CompetitionComponent
    },
    {
        path:'projects',
        component:ProjectsComponent
    },
    {
        path:'**',
        redirectTo:'' //home component
    }
];
