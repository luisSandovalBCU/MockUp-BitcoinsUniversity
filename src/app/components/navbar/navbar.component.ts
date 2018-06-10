import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var M:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }
  showRegisterForm : boolean = false;
  userIsSet : boolean = false;
  userNickname : string = '';
  searching : boolean = false;
  
  ngOnInit() {
    let modalOptions = new Object();
    var modalElems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modalElems, modalOptions);

    let sideNavOptions = new Object();
    var sidenavElems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenavElems, sideNavOptions);

    var selectElemsOptions = new Object();
    var selectElems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(selectElems, selectElemsOptions);
  }

  getRegisterForm(){
    if(this.showRegisterForm == false){
      this.showRegisterForm = true;
    }else{
      this.showRegisterForm = false;
    }
  }

  showSearchInput(){
    if(this.searching == true){
      this.searching = false;
    }else{
      this.searching = true;
      document.getElementById('search-input').focus();
    }
  }

  setNickname(){
    if(this.userNickname.length > 2){

      if(this.searching == false){
        this.searching = true;
      }else{
        this.searching = false;
      }
    }else{
      M.toast({html: 'Please fill out the form!'})
    }
    
  }

  onSubmitSearchImages(){
    this.router.navigate(['/videoSearch'])
    
  }

}
