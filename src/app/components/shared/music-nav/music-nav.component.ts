import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/API-Spoty/spotify.service'; 

@Component({
  selector: 'app-music-nav',
  templateUrl: './music-nav.component.html',
  styleUrls: ['./music-nav.component.css']
})
export class MusicNavComponent implements OnInit {
  releases: any = [];
  loading: boolean;
  error: boolean = false;;
  mensajeError: string = '';

  constructor( private spotify:SpotifyService ) {
    this.loading = true;
    this.spotify.getNewRealeses().subscribe( (data: any) =>{
      // this.releases = data.albums.items;
      this.releases = data;
      console.log(data);
      this.loading= false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
