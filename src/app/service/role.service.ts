import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  role : String = "";

  constructor() { 
    console.log("Service Created !!! ");
  }
}
