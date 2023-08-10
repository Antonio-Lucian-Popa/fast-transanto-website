import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  mobileMenuOpen = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  scrollToSection(sectionId: string) {
    console.log(sectionId)
    const element = document.querySelector(`#${sectionId}`);
    console.log(element)
    if (element) {
      const topOffset = element.getBoundingClientRect().top;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }

  openMobileMenu(): void {
    this.mobileMenuOpen = true;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

}
