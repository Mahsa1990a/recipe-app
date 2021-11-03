import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  collapsed = true;

  // want to emit my own event and make it listenable from app component:
  // @Output() featureSelected = new EventEmitter<string>(); Dont need it after adding routes

  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }   Dont need it after adding routes
};
