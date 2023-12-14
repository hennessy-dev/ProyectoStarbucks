import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Tooltip, initTE } from 'tw-elements';
import { NgOptimizedImage } from '@angular/common';
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NavComponent } from './pages/nav/nav.component';
import { initFlowbite } from 'flowbite';
import { CarrouselComponent } from './pages/carrousel/carrousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, NovedadesComponent, MenuComponent, CarrouselComponent, ContactoComponent, NavbarComponent, LayoutComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
