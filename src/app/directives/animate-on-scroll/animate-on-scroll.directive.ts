import { AnimationBuilder, AnimationMetadata, AnimationPlayer } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { BehaviorSubject, distinctUntilKeyChanged, map, Observable, of, pairwise, skip, skipWhile, switchMap, tap, throttleTime } from 'rxjs';
import { AnimateOnScrollService } from './animate-on-scroll.service';

@Directive({
  selector: '[animateOnScroll]',
})
export class AnimateOnScrollDirective {
  @Input() animateOnScroll!: AnimationMetadata | AnimationMetadata[];
  @Input() aosExitAnimation!: AnimationMetadata | AnimationMetadata[];
  @Input() aosOffset: number = 100;
  @Input() aosDelay: number = 1000;

  private _scroll$ = new BehaviorSubject<Event | undefined>(undefined);
  scroll$: Observable<Event | undefined>;
  private _entryPlayer!: AnimationPlayer;
  private _exitPlayer!: AnimationPlayer;

  @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: Event) {
      this._scroll$.next(event);
    }

  constructor(
    private animateOnScrollService: AnimateOnScrollService,
    private element: ElementRef,
    private renderer: Renderer2,
    private animationBuilder: AnimationBuilder
  ) {
    this.scroll$ = this._scroll$.asObservable();
    this.renderer.setStyle(this.element.nativeElement, 'opacity', 0);
    this.scroll$.pipe(
      switchMap(() => {
        const viewportHeight = window.innerHeight;
        const yPos = this.element.nativeElement.getBoundingClientRect().y;
        return of({viewportHeight, yPos})
      }),
      throttleTime(50),
      pairwise(),
      map(([prev, curr]) => {
        const scrollDirection = curr.yPos < prev.yPos ? 'down' : 'up';
        const elementIs = curr.yPos < curr.viewportHeight ? 'onScreen' : 'offScreen';
        const trigger = (curr.yPos + this.aosOffset) < curr.viewportHeight ? 'entry' : 'exit';
        return {
          scrollDirection: scrollDirection,
          elementIs: elementIs,
          trigger: trigger,
        }
      }),
    ).subscribe(({scrollDirection, elementIs, trigger}) => {
      // if (scrollDirection === 'down' && trigger === 'entry') this.triggerEntryAnimation();
      // if (scrollDirection === 'up' && trigger === 'exit') this.triggerExitAnimation();
      // if (elementIs === 'offScreen') this.renderer.setStyle(this.element.nativeElement, 'opacity', 0);
      // if (elementIs === 'onScreen') this.renderer.setStyle(this.element.nativeElement, 'opacity', 1);
    });
  }

  triggerEntryAnimation() {
    if (!this.animateOnScroll) {
      console.error(`No entry animation defined.  Pass an animation object of type (AnimationMetadata | AnimationMetadata[]) to animateOnScroll`)
      return;
    }
    const factory = this.animationBuilder.build(this.animateOnScroll);
    this._entryPlayer = factory.create(this.element.nativeElement);
    this._entryPlayer.play();
    this._entryPlayer.onDone(() => {
      this._entryPlayer.destroy();
      this.renderer.setStyle(this.element.nativeElement, 'opacity', 1);
    });
  }

  triggerExitAnimation() {
    if(!this.aosExitAnimation) return;
    const factory = this.animationBuilder.build(this.aosExitAnimation);
    this._exitPlayer = factory.create(this.element.nativeElement);
    this._exitPlayer.play();
    this._exitPlayer.onDone(() => {
      this._exitPlayer.destroy();
      this.renderer.setStyle(this.element.nativeElement, 'opacity', 0);
    });
  }

}
