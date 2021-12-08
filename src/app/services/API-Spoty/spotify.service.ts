import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// ?? RxJS
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('SpotifyService Loaded...');
  }

    // Headers para peticiones
  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQAQp7Ln04-mQHMdtitykAx_S72CcAGoV5sn6KBytuf4AJyXXmZdNYIHKfMaIpQ2SgEyIFk8njkCkHbe_JU'
    });

    return this.http.get(url, {headers});
  }

  getNewRealeses() {
    return this.getQuery('browse/new-releases').pipe(map( (data: any) => {
      return data['albums'].items
    }));
  }

  getArtist(str: any) {
    return this.getQuery(`search?q=${str}&type=artist`).pipe(map( (data: any) => {
      return data.artists.items;
    }));
  }

  routeArtist(id: any) {
    return this.getQuery(`artists/${id}`).pipe(map(data => {
      return data;
    }));
  }

  getTopTracks(id: any) {
    return this.getQuery(`artists/${id}/top-tracks?market=MX`).pipe(map( (data: any) => data['tracks']));
  }

}
