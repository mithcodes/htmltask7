document.getElementById('clock');
//nicha wala method bhi use ho sakta hn
//document.querySelector('#clock');


setInterval(function(){
    let date=new Date()
    //console.log(date.toLocaleString());
    clock.innerHTML=date.toLocaleString();
}, 1000)