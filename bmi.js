(function () {

    var standard = document.querySelector("#unit");
    const h1 = document.getElementById("H1");
    const h2 = document.getElementById("H2");
    const w = document.getElementById("W");
    const btn = document.getElementById("btn");
    const display = document.getElementById("bmi");
    var val;
    standard.addEventListener("change", (event) => {
        h1.value = "";
        h2.value = "";
        w.value = "";

        if (event.target.value == "Pounds") {
            h1.style.display = "inline"; 
            h1.placeholder = "feet" ;
            h2.placeholder = "inches";
            w.placeholder = "pounds";
        }
        else{
            h1.style.display = "none";
            h1.val = 0;
            h2.placeholder = "Centimeter";
            w.placeholder = "Kilograms";
        }
    });
    btn.addEventListener("click" , () =>{

        if(h1.val == 0)
        val = w.value / Math.pow((h2.value / 100),2);
        else
        val = (parseInt(w.value) * 703) / (Math.pow((parseInt(h1.value*12) + parseInt(h2.value)),2));
        display.value = `${val.toFixed(3)}`;
    });
    document.getElementById("Reset-btn").addEventListener("click" ,() => {
        h1.value = "";
        h2.value = "";
        w.value = "";
        display.value = "";
    
    });
    
})();
