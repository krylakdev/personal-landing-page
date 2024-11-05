import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTechCardFlip]',
  standalone: true,
})
export class TechCardFlipDirective {
  #el = inject(ElementRef);
  #renderer = inject(Renderer2);

  #className = 'flip';

  @HostListener('click')
  onClick(): void {
    const hostItem: HTMLElement = this.#el.nativeElement;
    const iterableAllItems: Element[] = Array.from(hostItem.parentElement!.children);

    iterableAllItems
      .filter(item => item.classList.contains(this.#className) && item !== hostItem)
      .forEach(item => this.#renderer.removeClass(item, this.#className));

    if (hostItem.classList.contains(this.#className)) {
      this.#renderer.removeClass(hostItem, this.#className);
    } else {
      this.#renderer.addClass(hostItem, this.#className);
    }
  }
}
