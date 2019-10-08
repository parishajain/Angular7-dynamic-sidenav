import { Component, OnInit } from '@angular/core';
import { faAppleAlt, faBars, faSearch, faBell, faWindowClose} from '@fortawesome/free-solid-svg-icons';
import  {NavbarService} from '/Users/cj/apple-navbar-project/apple-project/src/app/services/navbar.service'  ;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faAppleAlt = faAppleAlt;
  faBars = faBars;
  faBell = faBell;
  faSearch = faSearch;
  faWindowClose = faWindowClose;
  expandedSideNav = false;

  constructor(private navbarService : NavbarService) { }

  ngOnInit() {
    
  }

  expandSideNav(){
    this.expandedSideNav = !this.expandedSideNav;
    if(this.expandedSideNav == true){
      this.navbarService.openNav();
    } else {
      this.navbarService.closeNav();
    }
  }

}
