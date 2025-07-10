import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { concatMap, exhaustMap, mergeMap, Subject, switchMap, tap } from 'rxjs';
import { Api } from '../../services/api';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './operators.html',
  styleUrl: './operators.scss'
})
export class Operators implements OnInit {
   users: any[] = [];
  posts: any[] = [];
  selectedUserId = 1;
  trigger$ = new Subject<void>();

  constructor(private api: Api) {}

  ngOnInit() {
    this.api.getUsers().subscribe(users => {
      this.users = users
      console.log(this.users, "USERSS")
    })
  }

  loadWithSwitchMap() {
    this.posts = [];
    this.trigger$
      .pipe(
        tap(() => console.log('Using switchMap')),
        switchMap(() => this.api.getPostsByUser(this.selectedUserId))
      )
      .subscribe((data) => (this.posts = data));
    this.trigger$.next();
  }

  loadWithMergeMap() {
    this.posts = [];
    this.trigger$
      .pipe(
        tap(() => console.log('Using mergeMap')),
        mergeMap(() => this.api.getPostsByUser(this.selectedUserId))
      )
      .subscribe((data) => (this.posts = data));
    this.trigger$.next();
  }

  loadWithConcatMap() {
    this.posts = [];
    this.trigger$
      .pipe(
        tap(() => console.log('Using concatMap')),
        concatMap(() => this.api.getPostsByUser(this.selectedUserId))
      )
      .subscribe((data) => (this.posts = data));
    this.trigger$.next();
  }

  loadWithExhaustMap() {
    this.posts = [];
    this.trigger$
      .pipe(
        tap(() => console.log('Using exhaustMap')),
        exhaustMap(() => this.api.getPostsByUser(this.selectedUserId))
      )
      .subscribe((data) => (this.posts = data));
    this.trigger$.next();
  }
}
