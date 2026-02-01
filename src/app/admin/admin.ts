import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Sidebar } from '../shared/sidebar/sidebar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin',
  imports: [MatSidenavModule, MatIconModule, MatToolbarModule, MatButtonModule,
    RouterOutlet, Sidebar, RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  mode: 'over' | 'side' = 'side';

  @HostListener('window:resize')
  onResize() {
    this.mode = window.innerWidth < 768 ? 'over' : 'side';
  }

  ngOnInit() {
    this.onResize();
  }
}
