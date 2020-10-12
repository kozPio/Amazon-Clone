import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  valueX: string = "";

  constructor() { }

  ngOnInit(): void {
  }



  ChangeToX() {
    if (this.valueX === "") {
      this.valueX = "X"
    } else {
      this.valueX = ""
    }



  }


}
