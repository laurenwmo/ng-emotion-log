import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  routes = [
    { path: "homepage", name: "Home" },
    { path: "logs", name: "My Entries"},
    { path: "new-log", name: "New Entry"}
  ]


  constructor() {}

  ngOnInit(): void {}
}
