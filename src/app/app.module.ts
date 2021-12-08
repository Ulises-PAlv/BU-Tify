import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PersonalAccountComponent } from './components/personal-account/personal-account.component';
import { Error404Component } from './components/shared/error404/error404.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/shared/search/search.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CardComponent } from './components/shared/card/card.component';
import { PostComponent } from './components/shared/post/post.component';
import { AboutArtistComponent } from './components/about-artist/about-artist.component';

import { HttpClientModule } from '@angular/common/http';
import { MusicNavComponent } from './components/shared/music-nav/music-nav.component';

import { NoImagePipe } from './pipes/no-image.pipe';
import { SecureDOMPipe } from './pipes/secure-dom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    PersonalAccountComponent,
    Error404Component,
    NavbarComponent,
    SearchComponent,
    LoadingComponent,
    CardComponent,
    PostComponent,
    AboutArtistComponent,
    MusicNavComponent,
    NoImagePipe,
    SecureDOMPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
