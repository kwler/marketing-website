import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public collapseNav = true;
  public collapseFeatures = true;

  constructor() { }

  ngOnInit() {
  }

}
