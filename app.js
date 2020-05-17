let { mainCloseParentesis } = require('./CloseParentesis/main');
let { mainWaterPit } = require('./WaterPit/main');
let { mainMultiplesOf_3_5 } = require('./PJ_Euler_3and5/main');
let { mainSumEvenNumberFibonnaciSequence } = require('./PJ_SumFiboEven/main');
let { mainMaxPrimeFactor } = require('./PJ_PrimeFactor/main');
let { mainCardanoTriple } = require('./PJ_CardanoTriplet/main');

let { GetGDC_fromArray } = require('./utils/functions')


console.log(`Starting code challenges ...`);

// mainCloseParentesis();
// mainWaterPit();
// mainMultiplesOf_3_5();
// mainSumEvenNumberFibonnaciSequence();
// mainMaxPrimeFactor();
const arr = [1701, 3768];
console.log("GDC of ", arr, "is", GetGDC_fromArray(arr, arr.length));