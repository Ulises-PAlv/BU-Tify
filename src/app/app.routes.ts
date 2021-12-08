import { Routes } from '@angular/router';

// ?? Componentes #############################################################################
    // ** Social
    import { LoginComponent } from './components/login/login.component';
    import { HomeComponent } from './components/home/home.component';
    import { UserComponent } from './components/user/user.component';
    // ** SpotyAccess
    import { AboutArtistComponent } from './components/about-artist/about-artist.component';

    // ** Common
    import { Error404Component } from './components/shared/error404/error404.component';


// ?? Array path's ############################################################################
export const ROUTES : Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'artists/:id', component: AboutArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', component: Error404Component }
];