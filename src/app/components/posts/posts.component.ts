import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { HttpClient } from '@angular/common/http';
import { Posts } from 'src/app/model/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostsService, private http: HttpClient) { }
    posts;
  
  ngOnInit(): void {
    
    this.getData();
  }
  delete(id) {
    this.postService.delete(id).subscribe(res => {
      this.getData();
    });
  }

  getData() {
    this.postService.getAll().subscribe((data: Posts[])=>{
      console.log(data);
      this.posts = data;
    });
  }
}

