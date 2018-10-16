import { Component } from '@angular/core';
import { MenuItems } from '../../models/menu-items';

@Component({
  selector: 'menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.scss'],
})
export class MenuPanelComponent {

  constructor(items: MenuItems) {}



}
