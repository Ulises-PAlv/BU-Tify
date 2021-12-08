import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JSONPlaceholderApiService {

  constructor(private _http: HttpClient) {
    console.log('API Service loaded...');
  }

  getQuery(str: string) {
    const url = `https://jsonplaceholder.typicode.com/${str}`;
    
    return this._http.get(url);
  }

  getUserList() {
    return this.getQuery('users').pipe(map( data => {
      
      return data;
    }));
  }

  getPosts() {
    return this.getQuery('posts').pipe(map( data => {
      
      return data;
    }));
  }

  getComments(id: any) {
        return this.getQuery(`posts/${id.toString()}/comments`).pipe(map( data => {
      
      return data;
    }));
  }
}
