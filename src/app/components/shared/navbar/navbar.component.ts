import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIBUtifyService } from 'src/app/services/API-BUtify/api-butify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bandSearch: boolean = false
  bandDropwdown: boolean = false
  bandShowPubModal: boolean = false

  usrname: any

  constructor(private butifyService: APIBUtifyService, private _router: Router) {
    this.bandSearch = false;
    this.bandDropwdown = false;

    this.usrname = localStorage.getItem('usrTmp');
  }

  showSearch() {
    this.bandSearch = !this.bandSearch;
  }

  showDropDown() {
    this.bandDropwdown = !this.bandDropwdown;
  }

  logOut() {
    localStorage.clear()
    location.href = './login'
  }

  showModalPub() {
    this.bandShowPubModal = !this.bandShowPubModal
  }

  addPost(text: string) {
    let id = localStorage.getItem('idUsr') || null
    let body: any = {
      "PubText": text,
      "PubOwnerID": Number(id)
    }

    this.butifyService.postPub(body)
    this.bandShowPubModal = false
  }

  goToUsr() {
    let id = localStorage.getItem('idUsr')
    console.log(id)
    this._router.navigate(['/user', id]);
  }

  ngOnInit(): void {
  }
}
