const input = document.getElementById('input');


function reverseStrings(str) {
    return str.split('').reverse().join('')
}

function check() {
    const value = input.value;
    const reverse = reverseStrings(value);
    
    if (value === reverse ) {
        alert(' P A L I N D R O M E')
        
    }else{
        alert('No Today!')
    }
    input.value = '';

    
}