import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private rs: RoleService) { }

  ngOnInit(): void {
  }

  abc(event: any ) : void {
    event.preventDefault();              // to prevent the default action of the event
    // console.log(event);
    console.log(event.target.elements[0].value);
    console.log(event.target.elements[1].value);
    console.log(event.target.elements[2].value);

    let uname = event.target.elements[0].value;
    let pwd = event.target.elements[1].value;
    this.rs.role = event.target.elements[2].value;

    if(uname == pwd){
      this.router.navigate(['welcome']);
    }else{
      this.router.navigate(['']);
    }
  }

}
