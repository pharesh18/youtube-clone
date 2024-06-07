import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  ngToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }

  ngInputFocus() {
    const eleFocus = document.getElementById('search-focus');
    const eleIcon = document.getElementById('search-icon');
    if (eleFocus && eleIcon) {
      eleFocus.style.border = '1px solid blue';
      eleIcon.style.display = 'flex';
    }
  }

  ngInputBlur() {
    const eleFocus = document.getElementById('search-focus');
    const eleIcon = document.getElementById('search-icon');
    if (eleFocus && eleIcon) {
      eleFocus.style.border = 'none';
      eleIcon.style.display = 'none';
    }
  }
}
