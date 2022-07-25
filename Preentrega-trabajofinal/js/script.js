const foto = [];
let tiempo;
let diafragma;
let iso;

tiempo = prompt('Elige el tiempo que deseas exponer la foto: \n1- 1" \n2- 1/1.3 \n3- 1/1.6 \n4- 1/2 \n5- 1/2.5 \n6- 1/3 \n7- 1/4 \n8- 1/5');

switch(tiempo){
    case '1':
        foto[0] = ('1"');
        break;
    case '2':
        foto[0] = ('1/1.3');
        break;
    case '3':
        foto[0] = ('1/1.6');
        break;
    case '4':
        foto[0] = ('1/2');
        break;
    case '5':
        foto[0] = ('1/2.5');
        break;
    case '6':
        foto[0] = ('1/3');
        break;
    case '7':
        foto[0] = ('1/4');
        break;
    case '8':
        foto[0] = ('1/5');
        break;
}

diafragma = prompt('Elige que diafragma quieres usar para hacer la foto: \n1- F1.8 \n2- F2 \n3- F2.2 \n4- F2.5 \n5- F2.8 \n6- F3.2 \n7- F3.5 \n8- F4');

switch(diafragma){
    case '1':
        foto[1] = ('F1.8');
        break;
    case '2':
        foto[1] = ('F2');
        break;
    case '3':
        foto[1] = ('F2.2');
        break;
    case '4':
        foto[1] = ('F2.5');
        break;
    case '5':
        foto[1] = ('F2.8');
        break;
    case '6':
        foto[1] = ('F3.2');
        break;
    case '7':
        foto[1] = ('F3.5');
        break;
    case '8':
        foto[1] = ('F4');
        break;
}

iso = prompt('Elige la sensibilidad iso para hacer tu foto: \n1- 100 \n2- 125 \n3- 160 \n4- 200 \n5- 250 \n6- 320 \n7- 400 \n8- 500');

switch(iso){
    case '1':
        foto[2] = ('100');
        break;
    case '2':
        foto[2] = ('125');
        break;
    case '3':
        foto[2] = ('160');
        break;
    case '4':
        foto[2] = ('200');
        break;
    case '5':
        foto[2] = ('250');
        break;
    case '6':
        foto[2] = ('320');
        break;
    case '7':
        foto[2] = ('400');
        break;
    case '8':
        foto[2] = ('500');
        break;
}

alert('Tu fotografía se expondra ' +foto[0]+ ', el diafragma que utilizas es '+foto[1]+ ' y el ISO que usaras es '+foto[2]);