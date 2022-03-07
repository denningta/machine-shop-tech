import { animation, style, animate, trigger, transition, useAnimation, state } from '@angular/animations';

export const fadeInOut = 
  trigger('fadeInOut', [
    state('in', style({
      opacity: 1,
    })),
    state('closed', style({
      opacity: 0,
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('1s')
    ]),
  ])