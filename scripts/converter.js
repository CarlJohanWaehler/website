// Length units
const length = document.getElementById('length');
const result = document.getElementById('result');
const conversionStart = document.getElementById('startConverting');
let choosedUnit = '';
length.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        lengthChange();
    }
});

function lengthChange() {
    let lengthUnit1 = document.getElementById('lengthUnit1').value;
    let lengthUnit2 = document.getElementById('lengthUnit2').value;

    if (lengthUnit1 === 'mm') {
        if(lengthUnit2 === 'cm') {
            result.innerHTML = length.value / 10;
        } else if (lengthUnit2 === 'dm') {
            result.innerHTML = length.value / 100;
        } else if (lengthUnit2 === 'm') {
            result.innerHTML = length.value / 1000;
        } else if (lengthUnit2 === 'km') {
            result.innerHTML = length.value / 10000000;
        } else if (lengthUnit2 === '"') {
            result.innerHTML = length.value / 25.4;
        } else if (lengthUnit2 === 'miles') {
            result.innerHTML = length.value / 1.609e+6;
        } else if (lengthUnit2 === 'foot') {
            result.innerHTML = length.value / 304.8;
        }
    } else if (lengthUnit1 === 'cm') {
        if (lengthUnit2 === 'mm') {
            result.innerHTML = length.value * 10;
        } else if (lengthUnit2 === 'dm') {
            result.innerHTML = length.value / 10;
        } else if (lengthUnit2 === 'm') {
            result.innerHTML = length.value / 100;
        } else if (lengthUnit2 === 'km') {
            result.innerHTML = length.value / 100000;
        } else if (lengthUnit2 === '"') {
            result.innerHTML = length.value / 2.54;
        } else if (lengthUnit2 === 'miles') {
            result.innerHTML = length.value / 160900;
        } else if (lengthUnit2 === 'foot') {
            result.innerHTML = length.value / 30.48;
        }
    } else if (lengthUnit1 === 'dm') {
        if (lengthUnit2 === 'mm') {
            result.innerHTML = length.value * 100;
        } else if (lengthUnit2 === 'cm') {
            result.innerHTML = length.value * 10;
        } else if (lengthUnit2 === 'm') {
            result.innerHTML = length.value / 10;
        } else if (lengthUnit2 === 'km') {
            result.innerHTML = length.value / 10000;
        } else if (lengthUnit2 === '"') {
            result.innerHTML = length.value / 0.254;
        } else if (lengthUnit2 === 'miles') {
            result.innerHTML = length.value / 16090;
        } else if (lengthUnit2 === 'foot') {
            result.innerHTML = length.value / 3.048;
        }
    } else if (lengthUnit1 === 'm') {
        if (lengthUnit2 === 'mm') {
            result.innerHTML = length.value * 1000;
        } else if (lengthUnit2 === 'dm') {
            result.innerHTML = length.value * 10;
        } else if (lengthUnit2 === 'cm') {
            result.innerHTML = length.value * 100;
        } else if (lengthUnit2 === 'km') {
            result.innerHTML = length.value / 1000;
        } else if (lengthUnit2 === '"') {
            result.innerHTML = length.value * 39.37;
        } else if (lengthUnit2 === 'miles') {
            result.innerHTML = length.value / 1609;
        } else if (lengthUnit2 === 'foot') {
            result.innerHTML = length.value * 3.281;
        }
    } else if (lengthUnit1 === 'km') {
        if (lengthUnit2 === 'mm') {
            result.innerHTML = length.value * 1000000;
        } else if (lengthUnit2 === 'dm') {
            result.innerHTML = length.value * 10000;
        } else if (lengthUnit2 === 'm') {
            result.innerHTML = length.value * 1000;
        } else if (lengthUnit2 === 'cm') {
            result.innerHTML = length.value * 100000;
        } else if (lengthUnit2 === '"') {
            result.innerHTML = length.value * 39370;
        } else if (lengthUnit2 === 'miles') {
            result.innerHTML = length.value / 1.609;
        } else if (lengthUnit2 === 'foot') {
            result.innerHTML = length.value * 3.281;
        }
    } else if (lengthUnit1 === '"') {
        if (lengthUnit2 === 'mm') {
            result.innerHTML = length.value * 25.4;
        } else if (lengthUnit2 === 'dm') {
            result.innerHTML = length.value * 0.254;
        } else if (lengthUnit2 === 'm') {
            result.innerHTML = length.value * 0.0254;
        } else if (lengthUnit2 === 'cm') {
            result.innerHTML = length.value * 2.54;
        } else if (lengthUnit2 === 'km') {
            result.innerHTML = length.value / 39370;
        } else if (lengthUnit2 === 'miles') {
            result.innerHTML = length.value / 63360;
        } else if (lengthUnit2 === 'foot') {
            result.innerHTML = length.value / 12;
        }
    } else if (lengthUnit1 === 'miles') {
        if (lengthUnit2 === 'mm') {
            result.innerHTML = length.value * 1.609e+6;
        } else if (lengthUnit2 === 'dm') {
            result.innerHTML = length.value * 16090;
        } else if (lengthUnit2 === 'm') {
            result.innerHTML = length.value * 1609;
        } else if (lengthUnit2 === 'cm') {
            result.innerHTML = length.value * 160900;
        } else if (lengthUnit2 === 'km') {
            result.innerHTML = length.value * 1.609;
        } else if (lengthUnit2 === '"') {
            result.innerHTML = length.value * 63360;
        } else if (lengthUnit2 === 'foot') {
            result.innerHTML = length.value * 5280;
        }
    } else if (lengthUnit1 === 'foot') {
        if (lengthUnit2 === 'mm') {
            result.innerHTML = length.value * 304.8;
        } else if (lengthUnit2 === 'dm') {
            result.innerHTML = length.value * 3.048;
        } else if (lengthUnit2 === 'm') {
            result.innerHTML = length.value / 3.281;
        } else if (lengthUnit2 === 'cm') {
            result.innerHTML = length.value * 30.48;
        } else if (lengthUnit2 === 'km') {
            result.innerHTML = length.value / 3281;
        } else if (lengthUnit2 === '"') {
            result.innerHTML = length.value * 12;
        } else if (lengthUnit2 === 'miles') {
            result.innerHTML = length.value / 5280;
        }
    }

    if(lengthUnit1 === lengthUnit2 && lengthUnit1 !== '') {
        alert('Du kannst nicht in die Ausgangseinheit umrechnen! Wähle bitte eine andere Einheit aus!');
    }
    if (lengthUnit1 === '' || lengthUnit2 === '') {
        alert('Mindestens eine Umrechnungsgröße ist nicht angegeben. Bitte wähle die fehlende(n) Größe(n) aus.');
    }
    if (length.value === '') {
        alert('Bitte gib einen Wert ein, der umgerechnet werden soll!');
    } else if (length.value < 0) {
        result.innerHTML = '';
        alert('Der eingegebene Wert muss positiv sein!');
    }
}

// Temperature units
const temperature = document.getElementById('temperature');
temperature.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        temperatureChange();
    }
});

function temperatureChange() {
    let temperatureUnit1 = document.getElementById('temperatureUnit1').value;
    let temperatureUnit2 = document.getElementById('temperatureUnit1').value;
    if(temperatureUnit1 === 'c') {
        if(temperatureUnit2 === 'f') {
            result.innerHTML = temperature.value * 1.8 + 32;
        } else if(temperature2 === 'k') {
            result.innerHTML = temperature.value + 273.15;
        }
    } else if(temperatureUnit1 === 'f') {
        if(temperatureUnit2 === 'c') {
            result.innerHTML = (temperature.value - 32) * 5/9;
        } else if(temperatureUnit2 === 'k') {
            result.innerHTML = (temperature.value - 32) * 5/9 + 273.15;
        }
    } else if(temperatureUnit1 === 'k') {
        if(temperatureUnit2 === 'c') {
            result.innerHTML = temperature.value - 273.15;
        } else if(temperatureUnit2 === 'f') {
            result.innerHTML = (temperature.value - 273.15) * 9/5 + 32;
        }
    }
    if(temperatureUnit1 === temperatureUnit2 && temperatureUnit1 !== '') {
        alert('Du kannst nicht in die Ausgangseinheit umrechnen! Wähle bitte eine andere Einheit aus!');
    }
    if (temperatureUnit1 === '' || temperatureUnit2 === '') {
        alert('Mindestens eine Umrechnungsgröße ist nicht angegeben. Bitte wähle die fehlende(n) Größe(n) aus.');
    }
    if (temperature.value === '') {
        alert('Bitte gib einen Wert ein, der umgerechnet werden soll!');
    } else if (temperature.value < 0) {
        result.innerHTML = '';
        alert('Der eingegebene Wert muss positiv sein!');
    }
}

// Area units
const area = document.getElementById('area');
area.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        areaChange();
    }
});

function areaChange() {
    let areaUnit1 = document.getElementById('areaUnit1').value;
    let areaUnit2 = document.getElementById('areaUnit2').value;
    if(areaUnit1 === 'mm2') {
        if(areaUnit2 === 'cm2') {
            result.innerHTML = area.value / 100;
        } else if(areaUnit2 === 'dm2') {
            result.innerHTML = area.value / 10**4;
        } else if(areaUnit2 === 'm2') {
            result.innerHTML = area.value / 10**6;
        } else if(areaUnit2 === 'a') {
            result.innerHTML = area.value / 10**8;
        } else if(areaUnit2 === 'ha') {
            result.innerHTML = area.value / 10**10;
        } else if(areaUnit2 === 'km2') {
            result.innerHTML = area.value / 10**12;
        } 
    } else if(areaUnit1 === 'cm2') {
        if(areaUnit2 === 'mm2') {
            result.innerHTML = area.value * 100;
        } else if(areaUnit2 === 'dm2') {
            result.innerHTML = area.value / 100;
        } else if(areaUnit2 === 'm2') {
            result.innerHTML = area.value / 10**4;
        } else if(areaUnit2 === 'a') {
            result.innerHTML = area.value / 10**6;
        } else if(areaUnit2 === 'ha') {
            result.innerHTML = area.value / 10**8;
        } else if(areaUnit2 === 'km2') {
            result.innerHTML = area.value / 10**10;
        }
    } else if(areaUnit1 === 'dm2') {
        if(areaUnit2 === 'mm2') {
            result.innerHTML = area.value * 10**4;
        } else if(areaUnit2 === 'cm2') {
            result.innerHTML = area.value * 100;
        } else if(areaUnit2 === 'm2') {
            result.innerHTML = area.value / 100;
        } else if(areaUnit2 === 'a') {
            result.innerHTML = area.value / 10**4;
        } else if(areaUnit2 === 'ha') {
            result.innerHTML = area.value / 10**6;
        } else if(areaUnit2 === 'km2') {
            result.innerHTML = area.value / 10**8;
        } 
    } else if(areaUnit1 === 'm2') {
        if(areaUnit2 === 'mm2') {
            result.innerHTML = area.value * 10**6;
        } else if(areaUnit2 === 'cm2') {
            result.innerHTML = area.value * 10**4;
        } else if(areaUnit2 === 'dm2') {
            result.innerHTML = area.value * 100;
        } else if(areaUnit2 === 'a') {
            result.innerHTML = area.value / 100;
        } else if(areaUnit2 === 'ha') {
            result.innerHTML = area.value / 10**4;
        } else if(areaUnit2 === 'km2') {
            result.innerHTML = area.value / 10**6;
        }
    } else if(areaUnit1 === 'a') {
        if(areaUnit2 === 'mm2') {
            result.innerHTML = area.value * 100**8;
        } else if(areaUnit2 === 'cm2') {
            result.innerHTML = area.value * 10**6;
        } else if(areaUnit2 === 'dm2') {
            result.innerHTML = area.value * 10**4;
        } else if(areaUnit2 === 'm2') {
            result.innerHTML = area.value * 100;
        } else if(areaUnit2 === 'ha') {
            result.innerHTML = area.value / 100;
        } else if(areaUnit2 === 'km2') {
            result.innerHTML = area.value / 10**4;
        }
    } else if(areaUnit1 === 'ha') {
        if(areaUnit2 === 'mm2') {
            result.innerHTML = area.value * 100**10;
        } else if(areaUnit2 === 'cm2') {
            result.innerHTML = area.value * 100**8;
        } else if(areaUnit2 === 'dm2') {
            result.innerHTML = area.value / 10**6;
        } else if(areaUnit2 === 'm2') {
            result.innerHTML = area.value * 10**4;
        } else if(areaUnit2 === 'a') {
            result.innerHTML = area.value * 100;
        } else if(areaUnit2 === 'km2') {
            result.innerHTML = area.value / 100;
        }
    } else if(areaUnit1 === 'km2') {
        if(areaUnit2 === 'mm2') {
            result.innerHTML = area.value * 10**12;
        } else if(areaUnit2 === 'cm2') {
            result.innerHTML = area.value * 10**10;
        } else if(areaUnit2 === 'dm2') {
            result.innerHTML = area.value * 10**8;
        } else if(areaUnit2 === 'm2') {
            result.innerHTML = area.value * 10**6;
        } else if(areaUnit2 === 'a') {
            result.innerHTML = area.value * 10**4;
        } else if(areaUnit2 === 'ha') {
            result.innerHTML = area.value * 100;
        }
    }

    if(areaUnit1 === areaUnit2 && areaUnit1 !== '') {
        alert('Du kannst nicht in die Ausgangseinheit umrechnen! Wähle bitte eine andere Einheit aus!');
    }
    if (areaUnit1 === '' || areaUnit2 === '') {
        alert('Mindestens eine Umrechnungsgröße ist nicht angegeben. Bitte wähle die fehlende(n) Größe(n) aus.');
    }
    if (area.value === '') {
        alert('Bitte gib einen Wert ein, der umgerechnet werden soll!');
    } else if (area.value < 0) {
        result.innerHTML = '';
        alert('Der eingegebene Wert muss positiv sein!');
    }
}

// Data units
const data = document.getElementById('data');
data.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        dataChange();
    }
});

function dataChange() {
    let dataUnit1 = document.getElementById('dataUnit1').value;
    let dataUnit2 = document.getElementById('dataUnit2').value;
    if(dataUnit1 === 'bit') {
        if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value / 2**10;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value / 2**20;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value / 2**30;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value / 2**40;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value / 8;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value / (8 * 2**10);
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value / (8 * 2**20);
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / (8 * 2**30);
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / (8 * 2**40);
        }
    } else if(dataUnit1 === 'kbit') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 2**10;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value / 2**10;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value / 2**20;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value / 2**30;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value / 8 * 2**10;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value / 8;
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value / (8 * 2**10);
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / (8 * 2**20);
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / (8 * 2**30);
        }
    } else if(dataUnit1 === 'mbit') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 2**20;
        } else if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value * 2**10;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value / 2**10;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value / 2**20;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value / 8 * 2**20;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value / 8 * 2**10;
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value / 8;
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / (8 * 2**10);
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / (8 * 2**20);
        }
    } else if(dataUnit1 === 'gbit') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 2**30;
        } else if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value * 2**20;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value * 2**10;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value / 2**10;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value / 8 * 2**30;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value / 8 * 2**20;
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value / 8 * 2**10;
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / 8;
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / (8 * 2**10);
        }
    } else if(dataUnit1 === 'tbit') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 2**40;
        } else if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value * 2**30;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value * 2**20;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value * 2**10;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value / 8 * 2**40;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value / 8 * 2**30;
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value / 8 * 2**20;
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / 8 * 2**10;
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / 8;
        }
    } else if(dataUnit1 === 'b') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 8;
        } else if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value * 8 / 2**10;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value * 8 / 2**20;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value * 8 / 2**30;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value * 8 / 2**40;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value / 2**10;
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value / 2**20;
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / 2**30;
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / 2**40;
        }
    } else if(dataUnit1 === 'kb') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 8 * 2**10;
        } else if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value * 8;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value * 8 / 2**10;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value * 8 / 2**20;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value * 8 / 2**30;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value * 2**10;
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value / 2**10;
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / 2**20;
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / 2**30;
        }
    } else if(dataUnit1 === 'mb') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 8 * 2**20;
        } else if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value * 8 * 2**10;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value * 8;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value * 8 / 2**10;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value * 8 / 2**20;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value * 2**20;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value * 2**10;
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / 2**10;
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / 2**20;
        }
    } else if(dataUnit1 === 'gb') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 8 * 2**30;
        } else if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value * 8 * 2**20;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value * 8 * 2**10;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value * 8;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value * 8 / 2**10;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value * 2**30;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value * 2**20;
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value * 2**10;
        } else if(dataUnit2 === 'tb') {
            result.innerHTML = data.value / 2**10;
        }
    } else if(dataUnit1 === 'tb') {
        if(dataUnit2 === 'bit') {
            result.innerHTML = data.value * 8 * 2**40;
        } else if(dataUnit2 === 'kbit') {
            result.innerHTML = data.value * 8 * 2**30;
        } else if(dataUnit2 === 'mbit') {
            result.innerHTML = data.value * 8 * 2**20;
        } else if(dataUnit2 === 'gbit') {
            result.innerHTML = data.value * 8 * 2**10;
        } else if(dataUnit2 === 'tbit') {
            result.innerHTML = data.value * 8;
        } else if(dataUnit2 === 'b') {
            result.innerHTML = data.value * 2**40;
        } else if(dataUnit2 === 'kb') {
            result.innerHTML = data.value * 2**30;
        } else if(dataUnit2 === 'mb') {
            result.innerHTML = data.value * 2**20;
        } else if(dataUnit2 === 'gb') {
            result.innerHTML = data.value / 2**10;
        }
    }

    if(dataUnit1 === dataUnit2 && dataUnit1 !== '') {
        alert('Du kannst nicht in die Ausgangseinheit umrechnen! Wähle bitte eine andere Einheit aus!');
    }
    if (dataUnit1 === '' || dataUnit2 === '') {
        alert('Mindestens eine Umrechnungsgröße ist nicht angegeben. Bitte wähle die fehlende(n) Größe(n) aus.');
    }
    if (data.value === '') {
        alert('Bitte gib einen Wert ein, der umgerechnet werden soll!');
    } else if (data.value < 0) {
        result.innerHTML = '';
        alert('Der eingegebene Wert muss positiv sein!');
    }
}

// Time change
const time = document.getElementById('time');
time.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        timeChange();
    }
});

function timeChange() {
    let timeUnit1 = document.getElementById('timeUnit1').value;
    let timeUnit2 = document.getElementById('timeUnit2').value;
    if(timeUnit1 === 'ms') {
        if(timeUnit2 === 's') {
            result.innerHTML = time.value / 1000;
        } else if(timeUnit2 === 'min') {
            result.innerHTML = time.value / 60000;
        } else if(timeUnit2 === 'h') {
            result.innerHTML = time.value / 3.6e+6;
        } else if(timeUnit2 === 'd') {
            result.innerHTML = time.value / 8.64e+7;
        } else if(timeUnit2 === 'we') {
            result.innerHTML = time.value / 6.048e+8;
        } else if(timeUnit2 === 'mon') {
            result.innerHTML = time.value / 2.628e+9;
        } else if(timeUnit2 === 'a') {
            result.innerHTML = time.value / 3.154e+10;
        }
    } else if(timeUnit1 === 's') {
        if(timeUnit2 === 'ms') {
            result.innerHTML = time.value * 1000;
        } else if(timeUnit2 === 'min') {
            result.innerHTML = time.value / 60;
        } else if(timeUnit2 === 'h') {
            result.innerHTML = time.value / 3600;
        } else if(timeUnit2 === 'd') {
            result.innerHTML = time.value / 86400;
        } else if(timeUnit2 === 'we') {
            result.innerHTML = time.value / 604800;
        } else if(timeUnit2 === 'mon') {
            result.innerHTML = time.value / 2.628e+6;
        } else if(timeUnit2 === 'a') {
            result.innerHTML = time.value / 3.154e+7;
        }
    } else if(timeUnit1 === 'min') {
        if(timeUnit2 === 'ms') {
            result.innerHTML = time.value * 60000;
        } else if(timeUnit2 === 's') {
            result.innerHTML = time.value * 60;
        } else if(timeUnit2 === 'h') {
            result.innerHTML = time.value / 60;
        } else if(timeUnit2 === 'd') {
            result.innerHTML = time.value / 1440;
        } else if(timeUnit2 === 'we') {
            result.innerHTML = time.value / 10080;
        } else if(timeUnit2 === 'mon') {
            result.innerHTML = time.value / 43800;
        } else if(timeUnit2 === 'a') {
            result.innerHTML = time.value / 525600;
        }
    } else if(timeUnit1 === 'h') {
        if(timeUnit2 === 'ms') {
            result.innerHTML = time.value * 3.6e+6;
        } else if(timeUnit2 === 's') {
            result.innerHTML = time.value * 3600;
        } else if(timeUnit2 === 'min') {
            result.innerHTML = time.value * 60;
        } else if(timeUnit2 === 'd') {
            result.innerHTML = time.value / 24;
        } else if(timeUnit2 === 'we') {
            result.innerHTML = time.value / 168;
        } else if(timeUnit2 === 'mon') {
            result.innerHTML = time.value / 730;
        } else if(timeUnit2 === 'a') {
            result.innerHTML = time.value / 8760;
        }
    } else if(timeUnit1 === 'd') {
        if(timeUnit2 === 'ms') {
            result.innerHTML = time.value * 8.64e+7;
        } else if(timeUnit2 === 's') {
            result.innerHTML = time.value * 86400;
        } else if(timeUnit2 === 'min') {
            result.innerHTML = time.value * 1440;
        } else if(timeUnit2 === 'h') {
            result.innerHTML = time.value * 24;
        } else if(timeUnit2 === 'we') {
            result.innerHTML = time.value / 7;
        } else if(timeUnit2 === 'mon') {
            result.innerHTML = time.value / 30.417;
        } else if(timeUnit2 === 'a') {
            result.innerHTML = time.value / 365;
        }
    } else if(timeUnit1 === 'we') {
        if(timeUnit2 === 'ms') {
            result.innerHTML = time.value * 6.048e+8;
        } else if(timeUnit2 === 's') {
            result.innerHTML = time.value * 604800;
        } else if(timeUnit2 === 'min') {
            result.innerHTML = time.value * 10080;
        } else if(timeUnit2 === 'h') {
            result.innerHTML = time.value * 168;
        } else if(timeUnit2 === 'd') {
            result.innerHTML = time.value * 7;
        } else if(timeUnit2 === 'mon') {
            result.innerHTML = time.value / 4.345;
        } else if(timeUnit2 === 'a') {
            result.innerHTML = time.value / 52.143;
        }
    } else if(timeUnit1 === 'mon') {
        if(timeUnit2 === 'ms') {
            result.innerHTML = time.value * 2.628e+9;
        } else if(timeUnit2 === 's') {
            result.innerHTML = time.value * 2.628e+6;
        } else if(timeUnit2 === 'min') {
            result.innerHTML = time.value * 43800;
        } else if(timeUnit2 === 'h') {
            result.innerHTML = time.value * 730;
        } else if(timeUnit2 === 'd') {
            result.innerHTML = time.value * 30.417;
        } else if(timeUnit2 === 'we') {
            result.innerHTML = time.value * 4.345;
        } else if(timeUnit2 === 'a') {
            result.innerHTML = time.value / 12;
        }
    } else if(timeUnit1 === 'a') {
        if(timeUnit2 === 'ms') {
            result.innerHTML = time.value * 3.154e+10;
        } else if(timeUnit2 === 's') {
            result.innerHTML = time.value * 3.154e+7;
        } else if(timeUnit2 === 'min') {
            result.innerHTML = time.value * 525600;
        } else if(timeUnit2 === 'h') {
            result.innerHTML = time.value * 8760;
        } else if(timeUnit2 === 'd') {
            result.innerHTML = time.value * 365;
        } else if(timeUnit2 === 'we') {
            result.innerHTML = time.value * 52.143;
        } else if(timeUnit2 === 'mon') {
            result.innerHTML = time.value * 12;
        }
    } 

    if(timeUnit1 === timeUnit2 && timeUnit1 !== '') {
        alert('Du kannst nicht in die Ausgangseinheit umrechnen! Wähle bitte eine andere Einheit aus!');
    }
    if (timeUnit1 === '' || timeUnit2 === '') {
        alert('Mindestens eine Umrechnungsgröße ist nicht angegeben. Bitte wähle die fehlende(n) Größe(n) aus.');
    }
    if (time.value === '') {
        alert('Bitte gib einen Wert ein, der umgerechnet werden soll!');
    } else if (time.value < 0) {
        result.innerHTML = '';
        alert('Der eingegebene Wert muss positiv sein!');
    }
}

// Speed change
const speed = document.getElementById('speed');
speed.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
        speedChange();
    }
});

function speedChange() {
    console.log('Geschwindigkeit' + choosedUnit);
    let speedUnit1 = document.getElementById('speedUnit1').value;
    let speedUnit2 = document.getElementById('speedUnit2').value;
    if(speedUnit1 === 'ms') {
        if(speedUnit2 === 'kmh') {
            result.innerHTML = speed.value * 3.6;
        } else if(speedUnit2 === 'kn') {
            result.innerHTML = speed.value * 1.944;
        } else if(speedUnit2 === 'mih') {
            result.innerHTML = speed.value * 2.237;
        } else if(speedUnit2 === 'fs') {
            result.innerHTML = speed.value * 3.281;
        }
    } else if(speedUnit1 === 'kmh') {
        if(speedUnit2 === 'ms') {
            result.innerHTML = speed.value / 3.6;
        } else if(speedUnit2 === 'kn') {
            result.innerHTML = speed.value / 1.852;
        } else if(speedUnit2 === 'mih') {
            result.innerHTML = speed.value / 1.609;
        } else if(speedUnit2 === 'fs') {
            result.innerHTML = speed.value / 1.097;
        }
    } else if(speedUnit1 === 'kn') {
        if(speedUnit2 === 'ms') {
            result.innerHTML = speed.value / 1.944;
        } else if(speedUnit2 === 'kmh') {
            result.innerHTML = speed.value * 1.852;
        } else if(speedUnit2 === 'mih') {
            result.innerHTML = speed.value * 1.151;
        } else if(speedUnit2 === 'fs') {
            result.innerHTML = speed.value * 1.688;
        }
    } else if(speedUnit1 === 'mih') {
        if(speedUnit2 === 'ms') {
            result.innerHTML = speed.value / 2.237;
        } else if(speedUnit2 === 'kmh') {
            result.innerHTML = speed.value * 1.609;
        } else if(speedUnit2 === 'kn') {
            result.innerHTML = speed.value / 1.151;
        } else if(speedUnit2 === 'fs') {
            result.innerHTML = speed.value * 1.467;
        }
    } else if(speedUnit1 === 'fs') {
        if(speedUnit2 === 'ms') {
            result.innerHTML = speed.value / 3.281;
        } else if(speedUnit2 === 'kmh') {
            result.innerHTML = speed.value * 1.907;
        } else if(speedUnit2 === 'kn') {
            result.innerHTML = speed.value / 1.688;
        } else if(speedUnit2 === 'mih') {
            result.innerHTML = speed.value / 1.467;
        }
    }

    if(speedUnit1 === speedUnit2 && speedUnit1 !== '') {
        alert('Du kannst nicht in die Ausgangseinheit umrechnen! Wähle bitte eine andere Einheit aus!');
    }
    if (speedUnit1 === '' || speedUnit2 === '') {
        alert('Mindestens eine Umrechnungsgröße ist nicht angegeben. Bitte wähle die fehlende(n) Größe(n) aus.');
    }
    if (speed.value === '') {
        alert('Bitte gib einen Wert ein, der umgerechnet werden soll!');
    } else if (speed.value < 0) {
        result.innerHTML = '';
        alert('Der eingegebene Wert muss positiv sein!');
    }
}

// Choose units
const unitOverview = document.getElementById('unitOverview');
const main = document.querySelector('main');
const units = main.querySelectorAll('div');
const home = document.getElementById('home');
const selects = document.querySelectorAll('select');
const inputs = document.querySelectorAll('input');
const paragraphs = main.querySelectorAll('p');
let choose = true;
const button = document.getElementById('submit');
const headline = document.getElementById('headline');

function chooseUnit(unit) {
    if(choose) {
        for (let i = 0; i < units.length; i++) {
            units[i].classList.add('toggleUnvisible');
        }
        units[unit].classList.remove('toggleUnvisible');
        unitOverview.classList.add('toggleUnvisible');
        home.classList.remove('toggleUnvisible');
        choose = false;
        button.classList.remove('toggleUnvisible');
        headline.classList.remove('toggleUnvisible');
        if(unit === 0) {
            headline.innerHTML = '<img src="../img/length.svg" alt="" class="headlineIcon"> Länge';
        } else if(unit === 1) {
            headline.innerHTML = '<img src="../img/thermometer.svg" alt="" class="headlineIcon"> Temperatur';
        } else if(unit === 2) {
            headline.innerHTML = '<img src="../img/square.svg" alt="" class="headlineIcon"> Fläche';
        } else if(unit === 3) {
            headline.innerHTML = '<img src="../img/database.svg" alt="" class="headlineIcon"> Dateigröße';
        } else if(unit === 4) {
            headline.innerHTML = '<img src="../img/timer.svg" alt="" class="headlineIcon"> Zeit';
        } else if(unit === 5) {
            headline.innerHTML = '<img src="../img/speed.svg" alt="" class="headlineIcon"> Geschwindigkeit';
        }
    } else{
        home.classList.add('toggleUnvisible');
        unitOverview.classList.remove('toggleUnvisible');
        for (let i = 0; i < units.length; i++) {
            units[i].classList.add('toggleUnvisible');
        }
        choose = true;
        button.classList.add('toggleUnvisible');
        headline.classList.add('toggleUnvisible');
    }
    choosedUnit = unit;
    for (let i = 0; i < selects.length; i++) {
       selects[i].value = '';
    }

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
    result.innerHTML = '';
}

function startConverting() {
    if(choosedUnit === 0) {
        lengthChange();
    } else if(choosedUnit === 1) {
        temperatureChange();
    } else if(choosedUnit === 2) {
        areaChange();
    } else if(choosedUnit === 3) {
        dataChange();
    } else if(choosedUnit === 4) {
        timeChange();
    } else if(choosedUnit === 5) {
        speedChange();
    }
}