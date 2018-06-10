import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styles: []
})
export class VideoComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    let collapsibleOptions = new Object();
    var collapsibleElems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(collapsibleElems, collapsibleOptions);
  }

}
