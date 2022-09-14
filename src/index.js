import './assets/sass/styles.scss';

import Header from './components/Header/Header';
import Intro from './components/sections/Intro/Intro';
import Area_1 from './components/sections/Area-1/Area-1';
import Area_2 from './components/sections/Area-2/Area-2';
import Area_3 from './components/sections/Area-3/Area-3';
import Area_4 from './components/sections/Area-4/Area-4';
import Area_5 from './components/sections/Area-5/Area-5';
import Area_6 from './components/sections/Area-6/Area-6';
import Area_7 from './components/sections/Area-7/Area-7';
import Area_8 from './components/sections/Area-8/Area-8';

import pc from './assets/images/pcb7.png';
import b7logo from './assets/images/logo-b7.png';
import c1 from './assets/images/a2_c1.png';
import c2 from './assets/images/a2_c2.png';
import c3 from './assets/images/a2_c3.png';
import c4 from './assets/images/a2_c4.png';
import backicon from './assets/images/backend.png';
import fronticon from './assets/images/front-end.png';
import mobileicon from './assets/images/mobile.png';
import htmlIcon from './assets/images/html.png';
import jsIcon from './assets/images/js.png';
import nodeIcon from './assets/images/node.png';
import phpIcon from './assets/images/php.png';
import reactIcon from './assets/images/react.png';
import nativeIcon from './assets/images/native.png';
import a9_1 from './assets/images/a9_img1.png';
import a9_2 from './assets/images/a9_img2.png';
import a9_3 from './assets/images/a9_img3.png';
import a9_4 from './assets/images/a9_img4.png';
import a11 from './assets/images/a11.png';

import FAQ from './components/sections/FAQ/faq';
import { Area_9 } from './components/sections/Area-9/Area-9';
import Area_11 from './components/sections/Area-11/Area-11';
import Area_12 from './components/sections/Area-12/Area-12';
import Footer from './components/Footer/Footer';


const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer');
const sectionIntro = document.createElement('section');
const section_1 = document.createElement('section');
const section_2 = document.createElement('section');
const section_3 = document.createElement('section');
const section_4 = document.createElement('section');
const section_5 = document.createElement('section');
const section_6 = document.createElement('section');
const section_7 = document.createElement('section');
const section_8 = document.createElement('section');
const section_9 = document.createElement('section');
const section_10 = document.createElement('section');
const section_11 = document.createElement('section');
const section_12 = document.createElement('section');
const section_13 = document.createElement('section');
const section_14 = document.createElement('section');
const section_15 = document.createElement('section');

document.body.appendChild(header);
document.querySelector('header').innerHTML = Header(b7logo);

document.body.appendChild(main);

sectionIntro.setAttribute('id', 'introArea');
sectionIntro.innerHTML = Intro(pc);
main.appendChild(sectionIntro);

section_1.setAttribute('id', 'area_1');
section_1.innerHTML = Area_1();
main.appendChild(section_1);

section_2.setAttribute('id', 'area_2');
section_2.innerHTML = Area_2([c1, c2, c3, c4]);
main.appendChild(section_2);

section_3.setAttribute('id', 'area_3');
section_3.innerHTML = Area_3();
main.appendChild(section_3);

section_4.setAttribute('id', 'area_4');
section_4.innerHTML = Area_4([backicon, fronticon, mobileicon]);
main.appendChild(section_4);

section_5.setAttribute('id', 'area_5');
section_5.innerHTML = Area_5([htmlIcon, jsIcon, nodeIcon, phpIcon, reactIcon, nativeIcon]);
main.appendChild(section_5);

section_6.setAttribute('id', 'area_6');
section_6.innerHTML = Area_6(reactIcon);
main.appendChild(section_6);

section_7.setAttribute('id', 'area_7');
section_7.innerHTML = Area_7();
main.appendChild(section_7);

section_8.setAttribute('id', 'area_8');
section_8.innerHTML = Area_8();
main.appendChild(section_8);

section_9.setAttribute('id', 'area_9');
section_9.innerHTML = Area_9([a9_1, a9_2, a9_3, a9_4]);
main.appendChild(section_9);

section_10.setAttribute('id', 'area_10');
section_10.innerHTML = Area_7();
main.appendChild(section_10);

section_11.setAttribute('id', 'area_11');
section_11.innerHTML = Area_11(a11);
main.appendChild(section_11);

section_12.setAttribute('id', 'area_12');
section_12.innerHTML = Area_12();
main.appendChild(section_12);

section_13.setAttribute('id', 'area_13');
section_13.innerHTML = Area_7();
main.appendChild(section_13);

section_14.setAttribute('id', 'FAQ');
section_14.innerHTML = FAQ();
main.appendChild(section_14);


section_15.setAttribute('id', 'area_15');
section_15.innerHTML = Area_7();
main.appendChild(section_15);

document.body.append(footer);
document.querySelector('footer').innerHTML = Footer(b7logo);