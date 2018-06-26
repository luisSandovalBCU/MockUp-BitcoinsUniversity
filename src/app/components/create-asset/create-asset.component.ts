import { Component, OnInit } from '@angular/core';
declare var M:any;
@Component({
  selector: 'app-create-asset',
  templateUrl: './create-asset.component.html',
  styleUrls: []
})
export class CreateAssetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let modalOptions = new Object();
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, modalOptions);
  }

}
