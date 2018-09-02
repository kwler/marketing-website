import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showNav = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    console.log("toggled");
    this.showNav = !this.showNav;
  }

}
