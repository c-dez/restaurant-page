import { pastorObj, especialGokuObj } from "../obj/obj.js"

export {makeListItem, pastor}
//hace el itme con nombre:valor e icono y regresa un elemento conteniendolo
const makeListItem = (obj)=>{
    const element = document.createElement('div')
    element.style.display = 'grid'
    element.style.gridTemplateColumns = 'repeat(2,1fr)'
    // element.style.backgroundColor = 'gray'
    element.style.alignItems = 'center'
    element.style.justifyItems = 'center'
    
    const namePrice = document.createElement('div')
    element.appendChild(namePrice)
    // namePrice.classList.add(`${obj.name}`)


    namePrice.textContent = `${obj.name}: ${obj.cost}`
    element.appendChild(obj.icon)




    return element
}

const pastor = makeListItem(especialGokuObj)