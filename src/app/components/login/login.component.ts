import { Component, OnInit, Inject } from '@angular/core';
import { JSONPlaceholderApiService } from 'src/app/services/Test/jsonplaceholder-api.service';
import { DOCUMENT } from '@angular/common';
import { APIBUtifyService } from 'src/app/services/API-BUtify/api-butify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  results: any = [];
  username: string = '';
  passwd: string = '';
  accessBand: number = 0;

  error: boolean = false;
  errorMsj: string = '';
  nameAlert: string = '';

  constructor(private apiService: JSONPlaceholderApiService, @Inject(DOCUMENT) private document: any,
  private butifyService: APIBUtifyService ) {
    const usr = localStorage.getItem('usrTmp') || null;

    if (usr !== null) {
      location.href = './home';
    }
  }

  // ?? Methods ##############################################################################################
  search(usr: { toString: () => string; }, passwd: { toString: () => string; }) {
    this.username = usr.toString();
    this.passwd = passwd.toString();

    this.butifyService.getUsers().subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
      this.validarUsr();

      if(this.accessBand === 1) {
        this.document.location.href = '../home';
        localStorage.setItem('usrTmp', this.username);
      } else {
        window.alert("You will may have an error on the username or password, try again...");
        location.reload();
      }
    }, (errorService) => {
      this.error = true;
      this.errorMsj = errorService.error.error.message;
    });
  }

  validarUsr() {
    for(let i = 0; i < this.results.length; i++) {
      if(this.results[i].UsrNickName === this.username && this.results[i].UsrPwd === this.passwd) {
        localStorage.setItem('idUsr', this.results[i].UsrID)
        this.accessBand = 1;
        break;
      }
      this.accessBand = 2;
    }
  }

  // ?? Life cycle ############################################################################################
  ngOnInit(): void { }
}
