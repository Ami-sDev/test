const sidebar = document.querySelector('nav'),
    toggle = document.querySelector('.toggle')

//-------------------------------------------------------------------------------------------------//

toggle.addEventListener('click' , () => {
    sidebar.classList.toggle('close');
})

//-------------------------------------------------------------------------------------------------//

console.log(1)
console.log(window.Telegram.WebApp.initData)
console.log(window.Telegram.WebApp.initDataUnsafe)
console.log(2)

