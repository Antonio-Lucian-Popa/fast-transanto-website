import { Component, HostListener } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showScrollButton = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Calcola la posizione dello scroll
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Mostra il pulsante solo se la posizione di scroll è maggiore di un certo valore (ad es. 100px)
    this.showScrollButton = scrollPosition > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
