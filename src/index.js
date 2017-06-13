import './index.css';

import numeral from 'numeral';

const packageValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${packageValue} for this awesome package !`);  // ` is a backtick formatter in ES6, which helps to subsistute string values
