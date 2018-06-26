import { Component, OnInit } from '@angular/core';
declare var M:any;


@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html'
})
export class ExpertProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let tooltipOptions = new Object();
    var tooltipElems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(tooltipElems, tooltipOptions);
  }

}
