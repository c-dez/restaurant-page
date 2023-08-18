export {makeContentElement}
import {content} from '../index.js'

const makeContentElement = ()=>{
    content.style.backgroundColor = 'gray'
    content.style.height = '100%'
    content.style.display = 'grid'
    content.style.gridTemplateRows = '10% 70% 20%'
    content.style.gridTemplateColumns = '5% 90% 5%'

    

}