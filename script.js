const sidebar = document.querySelector('nav'),
    toggle = document.querySelector('.toggle')

//-------------------------------------------------------------------------------------------------//

toggle.addEventListener('click' , () => {
    sidebar.classList.toggle('close');
})

//-------------------------------------------------------------------------------------------------//

