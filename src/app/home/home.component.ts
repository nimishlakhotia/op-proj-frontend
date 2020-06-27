import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  title = 'THE OPPORTUNITY PROJECT.';

  constructor() { }

  ngOnInit(): void {
  }

}
