import $ from 'jquery';
import {TimelineMax} from 'gsap';

var tl = new TimelineMax();

tl
  	.fromTo('.header__right',1,{x: -500,},{x:0})
  	.fromTo('.header__user',1,{x: 500,},{x:0})
  	// .fromTo('.header__right',1,{x: 200,},{x:0}, '-=0.6')
  	.staggerFromTo('.menu__item', 0.5, {opacity:0,y:40}, {rotation:360,opacity:1,y:0}, 0.25);

