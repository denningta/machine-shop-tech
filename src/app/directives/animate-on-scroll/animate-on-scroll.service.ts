import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimateOnScrollService {
  scrollSubject$ = new Subject<Event>();
  scroll$: Observable<Event>

  constructor() {
    this.scroll$ = this.scrollSubject$.asObservable();
  }

  onScroll(event: Event) {
    this.scrollSubject$.next(event);
  }

  
}
