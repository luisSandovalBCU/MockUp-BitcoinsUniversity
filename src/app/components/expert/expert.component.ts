import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html'
})
export class ExpertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var parallaxOptions = new Object();
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, parallaxOptions);
  }

}
