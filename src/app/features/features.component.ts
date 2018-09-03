import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  activeSlide: number = 0;
  maxSlide: number = 3;

  constructor() { }

  ngOnInit() {
  }

  next() {
    console.log("next");
    this.activeSlide++;
    if (this.activeSlide==this.maxSlide) {
      this.activeSlide = 0;
    }
  }

  previous() {
    console.log("previous");
    this.activeSlide--;
    if (this.activeSlide<0) {
      this.activeSlide = this.maxSlide-1;
    }
  }

}
