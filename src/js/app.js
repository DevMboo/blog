document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-carousel', {
        cover      : true,
        heightRatio: 0.5,
        type       : 'loop',
        arrows     : false,
        autoplay   : true,  // Ativa o autoplay
        interval   : 6000,  // Tempo entre os slides (em milissegundos)
        pauseOnHover: false // O carrossel não pausa ao passar o mouse (opcional)
    } ).mount();

    AOS.init();
} );

const toggleMode = () => {
    const doc = document.documentElement;

    if (doc.classList.contains('dark')) {
        doc.classList.remove('dark');
    } else {
        doc.classList.add('dark');
    }
};

document.querySelectorAll('[data-modal-show]').forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.currentTarget.getAttribute('data-modal-show');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.classList.remove('hidden');
        }
    });
});

document.querySelectorAll('[data-modal-dismiss]').forEach(button => {
    button.addEventListener('click', (e) => {
        const modalId = e.currentTarget.getAttribute('data-modal-dismiss');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    });
});
