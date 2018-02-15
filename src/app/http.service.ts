import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
