import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIBUtifyService } from 'src/app/services/API-BUtify/api-butify.service';
import { SpotifyService } from 'src/app/services/API-Spoty/spotify.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: any;
  usrPosts: any = [];
  usr: any = {};
  trackList: any[] = [];

  constructor(private _router: ActivatedRoute, private butifyService: APIBUtifyService,
    private cdr: ChangeDetectorRef, private spotyService: SpotifyService ) {
      this.id = Number(this._router.snapshot.params['id']);
      this.asyncLoad()
  }

  ngOnInit(): void {
    this.getPlaylist()
  }

  getUsr() {
    this.butifyService.getUsr(this.id).subscribe((data: any) => {
      this.usr = data[0]
    });
  }

  getPlaylist() {
    let id = localStorage.getItem('idUsr') || null
    let playlistUsr: any = {}
    let arrayTracks: any[] = []

    this.butifyService.getPlaylist(id).subscribe((data: any) => {
      playlistUsr = data
      console.log(playlistUsr)

      playlistUsr.forEach((track: any) => {
        arrayTracks.push(track.NameRolita)
      });

      for(let i = 1; i < arrayTracks.length; i++) {
        this.spotyService.getTrack(arrayTracks[i]).subscribe((data: any) => {
          this.trackList.push(data)
        });
      }

      console.log(this.trackList);
    });
  }

  asyncLoad() {
    this.getUsr()
    this.cdr.markForCheck()
  }
}
