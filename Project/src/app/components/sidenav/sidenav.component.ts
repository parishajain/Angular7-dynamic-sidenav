import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import  {NavbarService} from '/Users/cj/apple-navbar-project/apple-project/src/app/services/navbar.service'  ;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})

export class SidenavComponent implements OnInit {
  @ViewChild('appDrawer') appDrawer : ElementRef
  listItems = [
    { 
      title: "Talent", 
      children: [],
      color: "blue"
    }, 
    { 
      title: "Connections",
      color: "magenta", 
      children: [
        {
          title: "Pipelines"
        },
        {
          title: "Requisition"
        },
        {
          title: "Projects"
        }
      ]
    },
    { 
      title: "Intelligence", 
      color: "orange",
      children: [
        {
          title: "Companies"
        },
        {
          title: "Schools"
        }
      ]
    }, 
    { 
      title: "Workspace", 
      color: "purple",
      children: [
        {
          title: "Colleges"
        }
      ]
    },
    { 
      title: "Insigths", 
      color: "green",
      children: []
    }, 
    { 
      title: "Johnny AppleSeed",
      color: "gray", 
      children: []
    }, 
  ];
  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
    this.navbarService.appDrawer = this.appDrawer;
  }
}
