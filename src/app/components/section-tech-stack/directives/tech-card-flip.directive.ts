import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTechCardFlip]',
  standalone: true,
})
export class TechCardFlipDirective {
  #el = inject(ElementRef);
  #renderer = inject(Renderer2);

  #className = 'tech-card__content-container--flip';

  @HostListener('click')
  onClick(): void {
    const hostItem: HTMLElement = this.#el.nativeElement;
    const interactiveItem: Element = hostItem.children[0];
    const iterableAllItems: Element[] = Array.from(hostItem.parentElement!.children);

    iterableAllItems
      .filter(item => item.children[0].classList.contains(this.#className) && item.children[0] !== interactiveItem)
      .forEach(item => this.#renderer.removeClass(item.children[0], this.#className));

    if (interactiveItem.classList.contains(this.#className)) {
      this.#renderer.removeClass(interactiveItem, this.#className);
    } else {
      this.#renderer.addClass(interactiveItem, this.#className);
    }
  }
}
