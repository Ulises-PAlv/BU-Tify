import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/API-Spoty/spotify.service';

@Component({
  selector: 'app-about-artist',
  templateUrl: './about-artist.component.html',
  styleUrls: ['./about-artist.component.css']
})
export class AboutArtistComponent implements OnInit {
  artista: any = {};
  loading: boolean = false;
  tracks: any = [];

  constructor( private _aRoute: ActivatedRoute, private spotify: SpotifyService ) {
    this._aRoute.params.subscribe( params => {
      this.loading = true;
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: any) {
    this.spotify.routeArtist(id).subscribe( data => {
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks(id: any) {
    this.spotify.getTopTracks(id).subscribe( data => {
      this.tracks = data;
      console.log(this.tracks);
      
    });
  }

  ngOnInit(): void {
  }
}
