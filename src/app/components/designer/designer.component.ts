import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html'
})
export class DesignerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var parallaxOptions = {
      responsiveThreshold: 100
    };
    var parallaxOptionsElems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(parallaxOptionsElems, parallaxOptions);
  }

}
