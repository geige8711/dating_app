import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'client';
  http = inject(HttpClient);
  users: any;

  ngOnInit(): void {
    this.http
      .get('https://localhost:5001/api/users')
      .subscribe((data) => (this.users = data));
  }
}
