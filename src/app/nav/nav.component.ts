import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showFeatures = false;
  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleShow() {
    this.showFeatures = !this.showFeatures;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}
