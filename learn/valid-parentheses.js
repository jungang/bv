"use strict";
/**
 * Created by jg on 2018/8/8.
 */


/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {

	let arr         = s.split('');
	let strLeft     = '{[(';
	let strRight    = ')]}';
	let stackLeft   = [];
	let stackRight  = [];

	arr.forEach(function (item, index) {

		if(strLeft.indexOf(item) !== -1){           //如果是左侧符号
			stackLeft.push(item)
		}else {

			console.log(stackLeft);
			
		}

	})
	
};

isValid("()");
isValid("()[]{}");
isValid("([)]");
isValid("{[]}");


