let display = document.getElementById('display');
let numDisplay ='';

// display.innerHTML solo es usada en la funcion show para mostrar el contenido.

// la variable importante es numDisplay, este es el numero que indica la pantalla de la calculadora; es el numero que se toma en cuenta para las operaciones.

function show() {
    display.innerHTML = numDisplay;
}

function calculator(value)
{
    if(typeof(value) == 'number')
    {
            if(numDisplay.length<=26)
            {

                numDisplay += ''+ value
                if(numDisplay.charAt(0)=='0')
                {
                    numDisplay = numDisplay.substring(1, numDisplay.length);
                }
            } else
            {
                alert('much numbers')
            }
        show()
    } else{
        switch(value)
        {
            case "del":
                numDisplay = numDisplay.substring(0, numDisplay.length - 1);
                if(numDisplay=='')
                {
                    numDisplay='0'
                }
                show();
                break;
            case "-":
                numDisplay += ''+ value
                show();
                break;
            case "+":
                numDisplay += ''+ value
                show();
                break;
            case "x":
                value = "*"
                numDisplay += ''+ value
                show();
                break;
            case "/":
                numDisplay += ''+ value
                show();
                break;
            case ".":
                numDisplay += ''+ value
                show();
                break;
            case "reset":
                numDisplay = '0'
                show();
                break;
            case "equal":
                numDisplay = eval(numDisplay)
                show();
                break;
        }
    }
}
