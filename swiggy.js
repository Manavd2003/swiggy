let arr=['Hungry?','Date night?','Party?','Cooking gone wrong?','Game night?','Unexpected guests?','Late at office?','Movie marathon?'];

let i=0;
console.log(arr[0]);

setInterval(function () {
    i+=1;
    if(i>7)
    {
        i=0;
    }

    document.getElementById('animation').innerHTML = arr[i];
}, 3000);
