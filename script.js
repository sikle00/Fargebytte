//model

let color1 = '#121212';

//view
updateView();
function updateView() { //A button that changes background color depending on what radiobutton that is pressed. On the original page and on dark blue, the text will be white, to easier being able to read what's on the page
    document.getElementById('app').innerHTML = /*HTML*/`
    <div>Colorchanging background?</div>

    You have chosen <tt>${color1}<tt> as background color.
    <br/>
    <input 
        type="radio" 
        name="c1" 
        onchange="color1 = 'darkblue'; updateView();"
        ${color1 == 'darkblue' ? 'checked' : ''}
    /> Dark blue<br>
    <input 
        type="radio" 
        name="c1" 
        onchange="color1 = 'darkred'; updateView();"
        ${color1 == 'darkred' ? 'checked' : ''}
    /> Dark red<br>
    <input 
        type="radio" 
        name="c1" 
        onchange="color1 = 'darkgreen'; updateView();"
        ${color1 == 'darkgreen' ? 'checked' : ''}
    /> Dark green<br>
    `
    if (color1 === "#121212") {
        document.getElementById("app").style.color = "white";}
    else if (color1 === "darkblue") {
        document.getElementById("app").style.color = "white";}
    else{
        document.getElementById("app").style.color = "black";};

    document.body.style.backgroundColor = color1;
}




//controller