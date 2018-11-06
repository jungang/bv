"use strict";
/**
 * Created by jg on 2018/11/6.
 */


import {foo} from './m1.js';
console.log(foo);
setTimeout(() => console.log(foo), 500);
