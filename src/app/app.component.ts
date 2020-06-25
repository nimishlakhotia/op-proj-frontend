import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'THE OPPORTUNITY PROJECT.';
  logo = 'LOGO';
  wishlist = 'WISHLIST'

  public isMenuOpen: boolean = false;

  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  constructor() {

  }

  ngOnInit() {
    //this.bodyTag.classList.add('home-container');
    //this.htmlTag.classList.add('home-container');
  }
  
  ngOnDestroy() {
    //this.bodyTag.classList.remove('home-container');
    //this.htmlTag.classList.remove('home-container');
  }
}
