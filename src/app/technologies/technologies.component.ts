import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public techs = [
    new TechCard("AWS", "Our cloud platform"),
    new TechCard("GCP", "lol"),
    new TechCard("Azure", "more lols")
  ];

  constructor() { }

  ngOnInit() {
  }

}

class TechCard {

  constructor(public name: string, public description: string) {}
}
