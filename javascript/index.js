let mainNav = document.getElementById('menu');
let navBarToggle = document.getElementById('navbar-toggle');
let modal = document.getElementById('form-container');
let loginBtn = document.getElementById('log-in');
let closeBtn = document.getElementById('close-btn');
let cancelBtn = document.getElementById('cancelBtn');
let signUpBtn = document.getElementById('sign-up');
let cancelForm = document.getElementById('cancel-form');

navBarToggle.addEventListener('click', ()=>{
    mainNav.classList.toggle('active');
});



loginBtn.addEventListener('click', ()=>{
    modal.style.display='block';
});


closeBtn.addEventListener('click', ()=>{
    modal.style.display='none'
});


cancelBtn.addEventListener('click', ()=>{
    modal.style.display='none'
});


signUpBtn.addEventListener('click', ()=>{
    document.getElementById('form-modal').style.display='block';
});


cancelForm.addEventListener('click', () => {
    document.getElementById('form-modal').style.display = 'none';
})

