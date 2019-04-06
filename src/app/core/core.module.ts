import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { CenterContentComponent } from './center-content/center-content.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainComponent, LeftMenuComponent, RightMenuComponent, CenterContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent, FooterComponent, MainComponent, LeftMenuComponent, RightMenuComponent, CenterContentComponent
  ]
})
export class CoreModule { }
