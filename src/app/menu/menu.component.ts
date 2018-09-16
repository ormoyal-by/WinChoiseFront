import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    isMenuOpen:boolean = false;//is navigation open
  constructor() { }

  ngOnInit() {
  }

  openMobileMenu(){
    this.isMenuOpen =  !this.isMenuOpen;
  }

}
