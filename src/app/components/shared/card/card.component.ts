import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() Items: any[]= [];
  

  constructor( private _router: Router ) { }

  renderArtist(item: any) {
    let artistaID;

    if(item.type === 'album') {
      artistaID = item.artists[0].id;
    } else {
      artistaID = item.id;
    }

    this._router.navigate(['/artists', artistaID]);
  }

  ngOnInit(): void {
  }
}
