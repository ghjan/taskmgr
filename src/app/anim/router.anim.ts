import {animate, state, style, transition, trigger, AnimationTriggerMetadata} from '@angular/animations';

const slideToRight = trigger('routeAnim', [
  state('void', style({position: 'fixed', width: '100%'}) ),
  state('*', style({position: 'fixed', width: '100%'}) ),
  transition(':enter', [
    style({transform: 'translateX(-100%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
  ])
]);

const slideToLeft = trigger('routeAnim', [
  state('void', style({position: 'fixed', width: '100%'}) ),
  state('*', style({position: 'fixed', width: '100%'}) ),
  transition(':enter', [
    style({transform: 'translateX(100%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
  ])
]);

const slideToBottom = trigger('routeAnim', [
  state('void', style({position: 'fixed', width: '100%', height: '80%'}) ),
  state('*', style({position: 'fixed', width: '100%', height: '80%'}) ),
  transition(':enter', [
    style({transform: 'translateY(-100%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateY(0%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
  ])
]);

const slideToTop = trigger('routeAnim', [
  state('void', style({position: 'fixed', width: '100%', height: '100%'}) ),
  state('*', style({position: 'fixed', width: '100%', height: '100%'}) ),
  transition(':enter', [
    style({transform: 'translateY(100%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
  ]),
  transition(':leave', [
    style({transform: 'translateY(0%)'}),
    animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
  ])
]);

export const defaultRouteAnim: AnimationTriggerMetadata = slideToBottom;
