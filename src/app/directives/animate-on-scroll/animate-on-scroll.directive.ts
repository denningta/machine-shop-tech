import { animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, map, mergeMap, Observable, of, skipWhile, Subject, switchMap, tap, throttle, throttleTime } from 'rxjs';
import { AnimateOnScrollService } from './animate-on-scroll.service';

@Directive({
  selector: '[animateOnScroll]',
})
export class AnimateOnScrollDirective {
  @Input() animateOnScroll!: AnimationMetadata | AnimationMetadata[];
  @Input() aosExitAnimation!: AnimationMetadata | AnimationMetadata[];
  @Input() aosOffset: number = 0;
  @Input() aosDelay: number = 0;

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
    let entryTriggered = false;
    this.scroll$.pipe(
      switchMap(() => {
        const viewportHeight = window.innerHeight;
        const yPos = this.element.nativeElement.getBoundingClientRect().y;
        return of({viewportHeight, yPos})
      }),
      map(({viewportHeight, yPos}) => {
        if ((yPos + this.aosOffset) <= viewportHeight) return 'onScreen'; 
        return 'offScreen';
      }),
      throttleTime(150),
      distinctUntilChanged(),
    ).subscribe((value) => {
      if (!entryTriggered) this.renderer.setStyle(this.element.nativeElement, 'opacity', 0);
      if (value === 'onScreen') {
        setTimeout(() => this.triggerEntryAnimation(), this.aosDelay);
        entryTriggered = true;
      }
      if (value == 'offScreen' && entryTriggered) {
        setTimeout(() => this.triggerExitAnimation(), this.aosDelay);
      } 
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
