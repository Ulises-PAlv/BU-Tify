import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/API-Spoty/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  resultados: any=[];
  loading: boolean = true;
  error: boolean = false;
  mensajeError: string = '';

  constructor( private spotify:SpotifyService ) { }

  search(term: any): any {
    if(term === '') return this.resultados = [];
    this.loading = true;
    
    this.spotify.getArtist(term).subscribe((data: any) =>{
      //console.log(data.artists.items);
      this.resultados = data;
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
