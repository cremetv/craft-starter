/*! @license
 * MedienMacher BWG
 *
 * copyright 2020 MedienMacher BWG (https://medienmacher-bwg.de/)
*/
// add js class to html element if js is supported
document.documentElement.classList.add('js');

import { select, selectAll, ready } from './utility/utils';
import 'lazysizes';
// import barba from '@barba/core';
// import { gsap } from 'gsap';



/*
 * Barba
 */
// let pageTransitionDuration = .25;
//
//
//
// // scroll to top of page on transition
// barba.hooks.before(() => {
//   document.body.scrollTo(0, 0);
// });
//
//
//
// // change body class on page transition
// barba.hooks.afterEnter(data => {
//   if (data.current.namespace != '') {
//     document.body.classList.remove(data.current.namespace);
//   }
//   document.body.classList.add(data.next.namespace);
// });
//
//
//
// barba.init({
//   debug: true,
//   prevent: ({ el }) => el.classList && el.classList.contains('prevent'),
//
//   views: [],
//
//   transitions: [{
//     name: 'default',
//
//     leave(data) {
//       return gsap.to(data.current.container, {
//         autoAlpha: 0,
//         duration: pageTransitionDuration,
//       });
//     },
//
//     beforeEnter(data) {
//       // TODO: remove active class from menu items
//       // TODO: add active class to active menu item
//     },
//
//     after(data) {
//       return gsap.from(data.next.container, {
//         autoAlpha: 0,
//         duration: pageTransitionDuration
//       });
//     },
//   }],
// });
