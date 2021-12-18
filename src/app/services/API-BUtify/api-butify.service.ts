import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_Values } from 'src/environments/apiconnect';

// ?? RxJS
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIBUtifyService {
  environment: any

  constructor( private _http: HttpClient ) {
    this.environment = new API_Values()
    console.log('BUtifyService Loaded...');
    console.log(this.environment)
  }

  getQuery(str: string) {
    const url = this.environment.url + str
    return this._http.get(url);
  }

  getUsers() {
    return this.getQuery(this.environment.q_GET.usrs).pipe(map( data => {
      return data;
    }));
  }

  getUsr(id: string) {
    return this.getQuery(this.environment.q_GET.usr + id).pipe(map( data => {
      return data;
    }));
  }

  getPosts() {
    return this.getQuery(this.environment.q_GET.posts).pipe(map( data => {
      return data;
    }));
  }

  getComments(id: string) {
    return this.getQuery(this.environment.q_GET.commentPost + id).pipe(map( data => {
      return data;
    }));
  }

  postPub(body: any) {
    this._http.post(`${this.environment.url}${this.environment.q_POST.addPost}`, body).toPromise();
  }

  postComment(body: any) {
    this._http.post(`${this.environment.url}${this.environment.q_POST.addCommt}`, body).toPromise();
  }

  postRolita(body: any) {
    this._http.post(`${this.environment.url}${this.environment.q_POST.addRolita}`, body).toPromise();
  }
}
