import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public totalWishedItem : number = 0;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {

    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    this.cartService.getWishlist()
    .subscribe(res=>{
      this.totalWishedItem = res.length;
    })
  }

  isLoggedIn(){
    return window.localStorage.getItem("login") === "true";
  }

  logout(){
    if(confirm("Are you sure you want to log out?")){
      window.localStorage.removeItem("login");
      window.localStorage.removeItem("role");
      this.router.navigate(["/home"])
    }
  }

  confirmRole(){
    return window.localStorage.getItem('role')==='USER';
  }

}
