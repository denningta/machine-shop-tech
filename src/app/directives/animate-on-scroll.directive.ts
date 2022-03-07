import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { debounceTime, filter, from, mergeMap, of } from 'rxjs';
import { AnimateOnScrollService } from './animate-on-scroll.service';

interface AnimateOnScroll {
  animation: string;
  options?: {
    animation?: string;
    offset?: number;
    delay?: number;
  }
}

@Directive({
  selector: '[appAnimateOnScroll]'
})
export class AnimateOnScrollDirective {
  @Input() appAOS: string = '';
  @Input() aosOffset: number = 0;
  @Input() aosDelay: number = 0;

  constructor(
    private animateOnScroll: AnimateOnScrollService,
    private element: ElementRef
  ) {
    
    let animationTriggered = false;
    this.animateOnScroll.scroll$.pipe(
      mergeMap(() => {
        const viewportHeight = window.innerHeight;
        const yPos = this.element.nativeElement.getBoundingClientRect().y;
        return of({viewportHeight, yPos})
      }),
      // filter(({viewportHeight, yPos}) => {
      //   return yPos <= viewportHeight;
      // })
      debounceTime(10)
    ).subscribe(({viewportHeight, yPos}) => {
      if (yPos <= viewportHeight && animationTriggered) {
        this.triggerAnimation();
        animationTriggered = false;
      }
      if (yPos >= viewportHeight) animationTriggered = true;
    });
  }

  triggerAnimation() {
    console.log('trigger animation')
  }

}
