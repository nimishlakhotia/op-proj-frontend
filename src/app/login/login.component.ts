import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  title = 'THE OPPORTUNITY PROJECT.';
  login = 'LOGIN WITH YOUR COLLEGE ID';
  logo = "LOGO";

  constructor() { }

  ngOnInit(): void {
  }

}
