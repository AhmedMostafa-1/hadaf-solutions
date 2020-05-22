import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from 'src/app/model/posts';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent implements OnInit {

  postsForm: FormGroup;
  id;
  posts: Posts = {id:0, title: '', body: ''};

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public postsService: PostsService,
    private route: ActivatedRoute
  ){ }
  ngOnInit() {
    this.postsForm = this.fb.group({
    title: [''],
    body: [''],

  });
  this.id = this.route.snapshot.paramMap.get('id');
  if(this.id) this.postsService.getById(this.id).subscribe(p => this.posts = p);
}
  submitForm() {
    this.postsService.update(this.id,this.postsForm.value).subscribe(res => {
      console.log('Post Updated!');
      this.router.navigate(['../posts-list']);
    })
     

  }
}

