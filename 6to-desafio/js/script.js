let radio_tde = document.getElementById('tde');
let radio_tdee = document.getElementById('tdee');

function cambiar_img(source) {
    document.getElementById('triangulo').src = source;
}

radio_tde.addEventListener('click', () => {
    cambiar_img('assets/img/tde.jpg');
})

radio_tdee.addEventListener('click', () => {
    cambiar_img('assets/img/tdee.jpg');
})

Caman('#my-image', function () {

    this.brightness(10);

    this.contrast(30);

    this.saturation(-30);

    this.render();

});