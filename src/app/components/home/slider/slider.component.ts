import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: []
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var sliderOptions = new Object();
    var sliderElems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(sliderElems, sliderOptions);
  }

}
