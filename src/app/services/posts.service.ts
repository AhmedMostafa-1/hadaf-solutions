import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../model/posts';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getById(id): Observable<Posts> {
    return this.httpClient.get<Posts>(this.apiServer + '/posts/' + id);
  }

  getAll(): Observable<Posts[]> {
    return this.httpClient.get<Posts[]>(this.apiServer + '/posts/');
  }

  update(id, product): Observable<Posts> {
    return this.httpClient.put<Posts>(this.apiServer + '/posts/' + id, JSON.stringify(product), this.httpOptions);
  }

  delete(id){
    return this.httpClient.delete<Posts>(this.apiServer + '/posts/' + id, this.httpOptions);
  }

}



