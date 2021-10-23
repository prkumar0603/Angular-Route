import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../service/role.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private rs: RoleService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return false;
    console.log("1 = "+route.data[0]);
    console.log("2 = "+this.rs.role);
    
    if(route.data[0]==this.rs.role || route.data[1]==this.rs.role){
      return true;
    }else{
      return false;
    }

  }
  
}
