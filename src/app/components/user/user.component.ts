import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var parallaxOptions = new Object();
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, parallaxOptions);
  }

}
