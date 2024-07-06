const sidebar = document.querySelector('nav'),
    toggle = document.querySelector('.toggle')

//-------------------------------------------------------------------------------------------------//

toggle.addEventListener('click' , () => {
    sidebar.classList.toggle('close');
})

//-------------------------------------------------------------------------------------------------//

const tel = window.Telegram.WebApp

console.log(tel.initData)


