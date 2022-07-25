let pago;
let precio;
let resultado;
let salir;
function descuento(a, b) {
    resultado = a - (a * b / 100);
    return resultado;
}
function intereses(a, b) {
    resultado = a + (a * b / 100);
    return resultado;
}
let camara = prompt('Tenemos las siguientes camaras a la venta, Cual te interesa? \n1 - Nikon D3500 con lente 18-55mm \n2 - Nikon D7500 con lente 18-140mm\n3 - Z fc con lente DX 16-50mm \nX Para salir');

while (camara != "x" && camara != "X"){
switch (camara) {
    case '1':
        pago = prompt('El precio es de $322500. Las formas de pago son: \n1 - Efectivo \n2 - En 3 cuotas \n3 - En 6 cuotas \n4 - En 12 cuotas \nX Para volver atras');
        while (pago != "x" && pago != "X" && salir != "2") {
            switch (pago) {
                case '1':
                    precio = descuento(322500, 10);
                    salir = prompt('El precio tiene un 10% de descuento abonaras $' + precio+'. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '2':
                    precio = intereses(322500, 10);
                    salir = prompt('El precio tiene un 10% de interes abonaras $' + precio + ' en 3 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '3':
                    precio = intereses(322500, 15);
                    salir = prompt('El precio tiene un 15% de interes abonaras $' + precio + ' en 6 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '4':
                    precio = intereses(322500, 20);
                    salir = prompt('El precio tiene un 20% de interes abonaras $' + precio + ' en 12 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
            }
            if(salir == "1"){
            pago = prompt('El precio es de $322500. Las formas de pago son: \n1 - Efectivo \n2 - En 3 cuotas \n3 - En 6 cuotas \n4 - En 12 cuotas \nX Para volver atras');
            } else {
                pago = 'x';
                break;
            }
        }
        camara = prompt('Tenemos las siguientes camaras a la venta, Cual te interesa? \n1 - Nikon D3500 con lente 18-55mm \n2 - Nikon D7500 con lente 18-140mm\n3 - Z fc con lente DX 16-50mm \nX Para salir');
        break;
        case '2':
        pago = prompt('El precio es de $675000. Las formas de pago son: \n1 - Efectivo \n2 - En 3 cuotas \n3 - En 6 cuotas \n4 - En 12 cuotas \nX Para volver atras');
        while (pago != "x" && pago != "X" && salir != "2") {
            switch (pago) {
                case '1':
                    precio = descuento(675000, 10);
                    salir = prompt('El precio tiene un 10% de descuento abonaras $' + precio+'. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '2':
                    precio = intereses(675000, 10);
                    salir = prompt('El precio tiene un 10% de interes abonaras $' + precio + ' en 3 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '3':
                    precio = intereses(675000, 15);
                    salir = prompt('El precio tiene un 15% de interes abonaras $' + precio + ' en 6 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '4':
                    precio = intereses(675000, 20);
                    salir = prompt('El precio tiene un 20% de interes abonaras $' + precio + ' en 12 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
            }
            if(salir == "1"){
            pago = prompt('El precio es de $675000. Las formas de pago son: \n1 - Efectivo \n2 - En 3 cuotas \n3 - En 6 cuotas \n4 - En 12 cuotas \nX Para volver atras');
            } else {
                pago = 'x';
                break;
            }
        }
        camara = prompt('Tenemos las siguientes camaras a la venta, Cual te interesa? \n1 - Nikon D3500 con lente 18-55mm \n2 - Nikon D7500 con lente 18-140mm\n3 - Z fc con lente DX 16-50mm \nX Para salir');
        break;
        case '3':
        pago = prompt('El precio es de $499400. Las formas de pago son: \n1 - Efectivo \n2 - En 3 cuotas \n3 - En 6 cuotas \n4 - En 12 cuotas \nX Para volver atras');
        while (pago != "x" && pago != "X" && salir != "2") {
            switch (pago) {
                case '1':
                    precio = descuento(499400, 10);
                    salir = prompt('El precio tiene un 10% de descuento abonaras $' + precio+'. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '2':
                    precio = intereses(499400, 10);
                    salir = prompt('El precio tiene un 10% de interes abonaras $' + precio + ' en 3 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '3':
                    precio = intereses(499400, 15);
                    salir = prompt('El precio tiene un 15% de interes abonaras $' + precio + ' en 6 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
                case '4':
                    precio = intereses(499400, 20);
                    salir = prompt('El precio tiene un 20% de interes abonaras $' + precio + ' en 12 cuotas. Quieres ver los precios con otras formas de pago? \n1 - Si \n2 - No');
                    break;
            }
            if(salir == "1"){
            pago = prompt('El precio es de $499400. Las formas de pago son: \n1 - Efectivo \n2 - En 3 cuotas \n3 - En 6 cuotas \n4 - En 12 cuotas \nX Para volver atras');
            } else {
                pago = 'x';
                break;
            }
        }
        camara = prompt('Tenemos las siguientes camaras a la venta, Cual te interesa? \n1 - Nikon D3500 con lente 18-55mm \n2 - Nikon D7500 con lente 18-140mm\n3 - Z fc con lente DX 16-50mm \nX Para salir');
        break;
    
}
}