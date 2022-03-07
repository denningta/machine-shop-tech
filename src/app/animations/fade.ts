import { style, animate, AnimationMetadata } from '@angular/animations';

// Fade In
export const fadeInUp: AnimationMetadata[] = [
  style({
    transform: 'translateY(20px)',
    opacity: 0
  }),
  animate(`500ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
    transform: 'translateY(0)',
    opacity: 1
  }))
];

export const fadeInDown: AnimationMetadata[] = [
  style({
    transform: 'translateY(-20px)',
    opacity: 0
  }),
  animate(`500ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
    transform: 'translateY(0)',
    opacity: 1
  }))
];

export const fadeInRight: AnimationMetadata[] = [
  style({
    transform: 'translateX(-20px)',
    opacity: 0
  }),
  animate(`500ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
    transform: 'translateX(0)',
    opacity: 1
  }))
];

export const fadeInLeft: AnimationMetadata[] = [
  style({
    transform: 'translateX(20px)',
    opacity: 0
  }),
  animate(`500ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
    transform: 'translateX(0)',
    opacity: 1
  }))
];


// Fade Out
export const fadeOutUp: AnimationMetadata[] = [
  style({
    transform: 'translateY(0px)',
    opacity: 1
  }),
  animate(`500ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
    transform: 'translateY(20px)',
    opacity: 0
  }))
];

export const fadeOutDown: AnimationMetadata[] = [
  style({
    transform: 'translateY(0px)',
    opacity: 1
  }),
  animate(`500ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
    transform: 'translateY(-20px)',
    opacity: 0
  }))
];

export const fadeOutLeft: AnimationMetadata[] = [
  style({
    transform: 'translateX(0px)',
    opacity: 1
  }),
  animate(`500ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
    transform: 'translateX(-20px)',
    opacity: 0
  }))
];

export const fadeOutRight: AnimationMetadata[] = [
  style({
    transform: 'translateX(0px)',
    opacity: 1
  }),
  animate(`500ms cubic-bezier(0.35, 0, 0.25, 1)`, style({
    transform: 'translateX(20px)',
    opacity: 0
  }))
];