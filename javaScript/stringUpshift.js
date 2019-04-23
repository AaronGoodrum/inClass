// Given a string, shift each letter in the string one character up, 
// and return the new string. If the next character goes past 'z', 
// come around to the letter 'a'.

function NextString (foo){
let bar = foo.split('')
let foobar = []
let i=0
    while(i <bar.length ){
        foobar.push(nextLetter(bar[i]))
        i++
    }
    console.log(foobar.join(''));
    
}
function nextLetter(s){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}

NextString('Thanks')