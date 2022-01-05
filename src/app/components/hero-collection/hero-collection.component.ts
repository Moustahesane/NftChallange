import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-collection',
  templateUrl: './hero-collection.component.html',
  styleUrls: ['./hero-collection.component.css']
})
export class HeroCollectionComponent implements OnInit {


  @Input() activeHero :any
  constructor() { }

  ngOnInit(): void {
  }

}
