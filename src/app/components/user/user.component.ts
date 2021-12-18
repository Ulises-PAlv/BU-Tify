import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIBUtifyService } from 'src/app/services/API-BUtify/api-butify.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: any;
  usrPosts: any = [];
  usr: any = {};

  constructor(private _router: ActivatedRoute, private butifyService: APIBUtifyService,
    private cdr: ChangeDetectorRef) {
      this.id = Number(this._router.snapshot.params['id']);
      this.asyncLoad()
  }

  ngOnInit(): void { }

  getUsr() {
    this.butifyService.getUsr(this.id).subscribe((data: any) => {
      this.usr = data[0]
      console.log(this.usr)
    });
  }

  asyncLoad() {
    this.getUsr()
    this.cdr.markForCheck()
  }
}
