import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostsFormComponent } from './components/posts-form/posts-form.component';


const routes: Routes = [

  {
    path:'posts-list',
    component: PostsComponent
  },

  {
    path:'posts-list/new',
    component: PostsFormComponent
  },
  {
    path:'posts-list/update/:id',
    component: PostsFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
