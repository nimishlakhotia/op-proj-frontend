import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendService } from '../_services/backend.service';
import { AuthService } from '../_services/auth.service';
import { User } from '../_models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {

  ops = "chjbkdsghbvksdcnbadvjkdnvkjdnvjkacklamlkacklamlkacklamlklamlkbgklamlkacklamlklamlkvlklamlkvggamlkvlklamlkvdddgdfg";

  user: User;

  constructor(private backendService: BackendService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.backendService.getUser(this.authService.currentUserValue.username).subscribe((ret: User)=>{
      this.user = ret;
    })
  }

  onSubmit(form) {
    this.backendService.patch(form.value).subscribe((ret: User)=>{
      this.user = ret;
      this.router.navigateByUrl("/profile");
    })
  }


}
