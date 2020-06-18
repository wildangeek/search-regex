let button = document.querySelector('.button');
let input = document.querySelector('.input');

button.addEventListener('click', function(){
    let regex1 = /^Bagaimana cara memulai bisnis$/
    let regex2 = /^Bootcamp impact byte$/
    let regex3 = /^Status covid hari ini$/

    if(regex1.test(input.value)){
       alert('ini cara memulai bisnis')
    }
    else if(regex2.test(input.value)){
        alert('ini bootcamp impact byte')
    }
    else if(regex3.test(input.value)){
        alert('ini status covid hari ini')
    }
    else{
        alert('Coba kata yang lain')
    }
})