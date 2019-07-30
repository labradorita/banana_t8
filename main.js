'use strict';
const smile = document.querySelector('.face');

function changeSmile(ev){
    smile.innerHTML = ';)';
}
function changeSmile2(){
    smile.innerHTML = ':)';
}

smile.addEventListener('mouseover', changeSmile);
smile.addEventListener('mouseout', changeSmile);