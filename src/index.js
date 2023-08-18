

const content = document.querySelector('#content')
content.style.backgroundColor = 'wheat'
content.style.height = '100%'
content.style.display = 'grid'
content.style.gridTemplateRows = '50px repeat(5, 1fr)'
content.style.gridTemplateColumns = 'repeat(1, 1fr)'

///title
const title = document.createElement('div')
title.textContent = 'MENU'
content.appendChild(title)
title.style.gridArea = '1/1/2/2'

//item1
const item1 = document.createElement('div')
item1.textContent = 'taco: precio - icono'
item1.style.gridArea = '2/1/3/2'
content.appendChild(item1)