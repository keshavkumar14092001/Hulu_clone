const loginOpen = document.querySelector('.login-btn');
const modalOpen = document.querySelector('.modal');
const close = document.querySelector('.modalCross');


loginOpen.addEventListener('click', () => {
    modalOpen.style.display = 'block';
});

close.addEventListener('click', () => {
    modalOpen.style.display = 'none';
});