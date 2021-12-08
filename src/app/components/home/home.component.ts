import { Component, OnInit, Inject } from '@angular/core';
import { JSONPlaceholderApiService } from 'src/app/services/Test/jsonplaceholder-api.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  // ?? Social net - SYSTEM ##########################################################################
  results: any = [];
  usrBand: boolean = false;
  error: boolean = false;
  errorMsj: string = '';
  nameAlert: string = '';

  constructor(private apiService: JSONPlaceholderApiService, @Inject(DOCUMENT) private document: any) {
    const usr = localStorage.getItem('usrTmp') || null;

    if (usr !== null) {
      this.usrBand = true;

      this.apiService.getPosts().subscribe((data: any) => {
        this.results = data;
      }, (errorService) => {
        this.error = true;
        this.errorMsj = errorService.error.error.message;
      });
    }
  }

  // ?? Methods ###############################################################################################

  // ?? Life cycle ############################################################################################
  ngOnInit(): void {
  }

}
