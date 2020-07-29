import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  './header-colors.component.css'],
})
export class HeaderComponent implements OnInit {

  logo = 'LOGO';
  wishlist = 'WISHLIST';

  @Input('page') page_style;

  mat_style = 'default';
  
  logo_class = {
    'logo': true,
    'mat-core': this.page_style == 'core',
    'mat-default': this.page_style != 'core',
  }

  wishlist_class = {
    'wishlist': true,
    'mat-core': this.page_style == 'core',
    'mat-default': this.page_style != 'core',
  }


  @Output() onSidenavToggle: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sidenavToggle() {
    this.onSidenavToggle.emit();
  }

  showHeader() {
    if(this.router.url.includes('login') || this.router.url.includes('register'))
    {
      return false;
    }
    return true;
  }

}
