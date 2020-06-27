import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  first_name = "Nimish";
  last_name = "Lakhotia";
  college = "IIT Bombay";
  year = "3rd";
  branch = "Meta Engineering";
  about = "Lorem ipsum description blah blah blah random hello description description description description hi hi";
  email = "email@iitb.ac.in";
  ops = "chjbkdsghbvksdcnbadvjkdnvkjdnvjkacklamlkacklamlkacklamlklamlkbgklamlkacklamlklamlkvlklamlkvggamlkvlklamlkvdddgdfg"
  constructor() { }

  ngOnInit(): void {
  }

}
