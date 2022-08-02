let titulo = document.getElementById('titulo_secundario');
titulo.innerText = prompt('Ingresa un nuevo titulo secundario')

let nuevo_div = document.createElement('div');
document.body.append(nuevo_div);
nuevo_div.innerHTML = '<img src="assets/img/tdee.jpg" alt="triangulo de exposicion efectos">';
document.body.append(nuevo_div);

let titulo_info = document.getElementById('titulo_info');
titulo_info.className = 'resaltar';