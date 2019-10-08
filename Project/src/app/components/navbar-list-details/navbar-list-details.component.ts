import { Component, OnInit, Input } from '@angular/core';
import { faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import  {NavbarService} from '/Users/cj/apple-navbar-project/apple-project/src/app/services/navbar.service'  ;

@Component({
  selector: 'app-navbar-list-details',
  templateUrl: './navbar-list-details.component.html',
  styleUrls: ['./navbar-list-details.component.css']
})
export class NavbarListDetailsComponent implements OnInit {
  faPlus = faPlus;
  faMinus = faMinus;
  listExpanded = false;
  @Input() item;

  constructor(private navbarService : NavbarService) {
   }

  ngOnInit() {
  }

  onItemSelected(item) {
    if (item.children && item.children.length) {
      this.listExpanded = !this.listExpanded;
    }
  }

}
