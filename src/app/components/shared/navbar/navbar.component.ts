import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bandSearch: boolean = false

  constructor() {
    this.bandSearch = false;
  }

  showSearch() {
    this.bandSearch = !this.bandSearch;
  }

  ngOnInit(): void {
  }
}
