
function titleFunc() {
    const title = document.getElementById("title");
    const txt = title.textContent;
    title.innerHTML = "";
    var i = 0
    setInterval(() => {
        if (i > txt.length-1){
            clearInterval()
        }
        else{

            title.textContent += txt[i];
            console.log(txt[i]);    
            i++;
        }
    }, 100);
}