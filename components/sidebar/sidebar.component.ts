import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;

  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Irányítópult",
    icon: "icon-globe-2",
    class: ""
  },
  {
    path: "/list-hagyatek",
    title: "Hagyaték",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/create",
    title: "Közfog. Hozzáadása",
    icon: "icon-simple-add",
    class: "" },
  /*{
    path: "/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },*/

 {
    path: "/list-bevetel",
    title: "Bevétel",
    icon: "icon-money-coins",
    class: ""
  },
  {
    path: "/list-kozfogis",
    title: "Közfoglalkoztatottak",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/list-gyerekvedelem",
    title: "Gyermekvédelem",
    icon: "icon-align-center",
    class: ""
  },
 {
    path: "/bevetelgraf",
    title: "Bevétel Grafikonok",
    icon: "icon-chart-bar-32",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
