
function pow (a, z) {

    if (z == 0 && a != 0) {
        return 1;
    }

    if (z <=0 && a == 0) {
        return NaN;
    }

    var modZ = Math.abs(z);
    var result = 1;

    for (var i = 1; i <= modZ; i++) {
        result = result * a;
    }

    if (z > 0) {
        return result;
    }

    return 1 / result;
}

var a = prompt('Put a', '');
var z = prompt('Put z', '');

if (isNaN(a) || isNaN(z)){
    console.log('Incorrected value!Put the number!');
} else if ((a % 1 !=0) || (z % 1 !=0)) {
    console.log('Incorrected value!Put the integer number!');
}
else {
    console.log('result = ' + pow(a,z));
}
