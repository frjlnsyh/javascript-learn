var s = '';
var no = 5;

for (var i = 0; i < no; i++) {
    for (var j = 0; j < i; j++) {
        s += '*'
    }
    s += '\n';
}

s += '\n';

for (var i = no; i > 0; i--) {
    for (var j = 0; j < i; j++) {
        s += '*'
    }
    s += '\n';
}

s += '\n';

for (var i = 0; i < no; i++) {
    for (var j = no; j > i; j--) {
        s += ' '
    }
    for (var z = 0; z < i; z++) {
        s += '*'
    }
    s += '\n';
}

s += '\n';

for (var i = no; i > 0; i--) {
    for (var j = no; j > i; j--) {
        s += ' '
    }
    for (var z = 0; z < i; z++) {
        s += '*'
    }
    s += '\n';
}

s += '\n';

for (var o = no; o > 0; o--) {
    for (var a = 0; a < o; a++) {
        s += ' ';
    }
    for (var w = no; w >= o; w--) {
        s += '+';
    }
    for (var r = no; r > o; r--) {
        s += '+';
    }
    s += '\n';
}

s += '\n';

for (var o = 0; o <= no; o++) {
    for (var a = 0; a < o; a++) {
        s += ' ';
    }
    for (var w = no; w > o; w--) {
        s += '+';
    }
    for (var r = no; r >= o; r--) {
        s += '+';
    }
    s += '\n';
}

s += '\n';

for (var i = 0; i < no; i++) {
    for (var j = 0; j < no; j++) {
        if (i % 2 === 0) {
            s += ' +'
        } else if (i % 2 === 1) {
            s += '+ '
        }
    }
    s += '\n';
}

s += '\n';

// for (var i = 0; i < no; i++) {
//     for (var j = no; j > i; j--) {
//         s += ' '
//     }
//     for (var z = 0; z <= i; z++) {
//         s += '*'
//     }
//     s += '\n'
// }

console.log(s)