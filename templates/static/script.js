document.querySelectorAll('.passive-load-content').forEach(function (e) {
    e.addEventListener('click', function (event) {
        const newframe = document.createElement('iframe');
        newframe.setAttribute('class', e.getAttribute('class'));
        newframe.classList.remove('passive-load-content');
        newframe.setAttribute('src', e.dataset.url);
        e.before(newframe);
        e.remove();
    });
});