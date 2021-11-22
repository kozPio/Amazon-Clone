import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hover-enlarge-image',
  templateUrl: './hover-enlarge-image.component.html',
  styleUrls: ['./hover-enlarge-image.component.scss'],
})
export class HoverEnlargeImageComponent implements OnInit {
  @Input() image: string;
  constructor() {}

  ngOnInit(): void {}
}
