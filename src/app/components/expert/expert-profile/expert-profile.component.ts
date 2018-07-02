import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
declare var M:any;


@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html'
})
export class ExpertProfileComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    let tooltipOptions = new Object();
    var tooltipElems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(tooltipElems, tooltipOptions);
  }

  uploadVideo(){
    let inputWithVideo = document.getElementById("videoUuploadInput").click();
    if(inputWithVideo){
      this.router.navigate(["/createAsset"]);
    }
  }

}
