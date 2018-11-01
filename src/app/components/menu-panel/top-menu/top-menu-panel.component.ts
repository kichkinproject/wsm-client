import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { MenuItems } from '../../../models/menu-items';

@Component({
  selector: 'top-menu-panel',
  templateUrl: './top-menu-panel.component.html',
  styleUrls: ['./top-menu-panel.component.scss'],
})
export class TopMenuPanelComponent {

  constructor(items: MenuItems) {}
}

@NgModule({
  imports: [CommonModule],
  exports: [TopMenuPanelComponent],
  declarations: [TopMenuPanelComponent]
})
export class SelectionPanelModule {
}
