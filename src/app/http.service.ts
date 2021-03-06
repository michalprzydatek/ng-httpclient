import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostByUser(id): Observable<Post> {
    const userId = new HttpParams().set('userId', '1');
    return this.http.get('https://jsonplaceholder.typicode.com/posts/',  {params: userId});
  }

 addPost(post: Post): Observable<Post> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }

}
