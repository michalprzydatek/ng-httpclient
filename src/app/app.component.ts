import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpService) {

  }

  getPosts() {
    this.httpService.getPosts().subscribe( posts => {
      console.log(posts);
    });
  }
  getPost() {
    this.httpService.getPost(1).subscribe( post => {
      console.log(post);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe( posts => {
      console.log(posts);
    });
  }

  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'body'
    });

    this.httpService.addPost(p).subscribe(post => {
      console.log(post);
    })
  }

  changePost() {
    const p: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis',
    });
  }

}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
