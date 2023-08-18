export {menu}

const menu = ()=>{
    const menu = document.createElement('div')
    menu.style.backgroundColor = 'wheat'
    menu.style.gridArea = '2/2/3/3'
    menu.classList.add('menuContainer')

    menu.style.display = 'grid'
    menu.style.gridTemplateRows = '10% 80% 10%'
    menu.style.gridTemplateColumns = '10% 80% 10%'

    const list = listFun()
    menu.appendChild(list)
    

    return menu
}

const listFun = ()=>{
    const element = document.createElement('div')
    element.textContent = 'asdasd'
    element.style.gridArea = '2/2/3/3'
    element.classList.add('listContainer')


    element.style.display = 'grid'
    element.style.gridTemplateRows = 'repeat(5, 1fr)'
    return element
}