let { mainCloseParentesis } = require('./CloseParentesis/main');
let { mainWaterPit } = require('./WaterPit/main');
let { mainMultiplesOf_3_5 } = require('./PJ_Euler_3and5/main');
let { mainSumEvenNumberFibonnaciSequence } = require('./PJ_SumFiboEven/main');
let { mainMaxPrimeFactor } = require('./PJ_PrimeFactor/main');

let { GetPrimesTo } = require('./utils/functions');

console.log(GetPrimesTo(30))

console.log(`Starting code challenges ...`);

// mainCloseParentesis();
// mainWaterPit();
// mainMultiplesOf_3_5();
// mainSumEvenNumberFibonnaciSequence();
mainMaxPrimeFactor();