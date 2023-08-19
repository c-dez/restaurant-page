export {makeMenu} 

const makeMenu = ()=>{
    const container = document.createElement('div')
    container.classList.add('menuContainer')
    container.style.height = '400px'
    container.style.width = '600px'
    container.style.backgroundColor = 'orange'

    container.style.display = 'grid'
    container.style.gridTemplateRows = '10% 1fr'
    container.style.gridTemplateColumns = '1fr'

    const title = makeTitle()
    container.appendChild(title)

    const list = makeList()
    container.appendChild(list)


    return container;

}

const makeTitle = ()=>{
    const element = document.createElement('div')
    element.textContent = 'MENU'
    element.style.gridArea = '1/1/2/2'
    element.style.color = 'white'
    element.style.justifySelf= 'center'
    
    return element
}

const makeList = ()=>{
    const element = document.createElement('div')
    element.classList.add('listContainer')
    element.style.display = 'grid'
    element.style.gridArea = '2/1/3/2'
    element.style.backgroundColor = 'aqua'

    element.style.gridTemplateColumns = 'repeat(3, 1fr)'
    element.style.gridTemplateRows = 'repeat(4,1fr)'




    return element
}