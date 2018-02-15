import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private httpService: HttpService) {

  }

  getPosts() {
    this.httpService.getPosts().subscribe( posts => {
      console.log(posts);
    });
  }

  getPost() {

  }

  addPost() {
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'body'
    });
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
