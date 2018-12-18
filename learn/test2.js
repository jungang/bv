"use strict";
/**
 * Created by jg on 2018/12/18.
 */


function fnA(n,c) {
	console.log(arguments);


	
}


function fnB() {
	
}


function cb() {
	console.log('cb....');
	
}



fnA(4,function () {
	console.log('fnA ....');
	
});