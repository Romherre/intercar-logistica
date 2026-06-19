// Lógica simple de envío de formulario para feedback visual
document.getElementById('formIntercar').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.innerHTML = 'Enviando...';
    btn.style.opacity = '0.7';

    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> ¡Enviado con Éxito!';
        btn.style.backgroundColor = '#25d366';
        btn.style.color = 'white';
        this.reset();
        setTimeout(() => {
            btn.innerHTML = 'Solicitar Presupuesto';
            btn.style.backgroundColor = '';
            btn.style.color = '';
            btn.style.opacity = '';
        }, 3000);
    }, 1500);
});
