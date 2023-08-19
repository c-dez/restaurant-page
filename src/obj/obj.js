export {pastorObj}
import {icon1} from '../icons/makeIcon.js'



const tacos = ['Pastor','Cesina','Cabeza', 'Campechano', 'Especial Goku']
const precios = [['taco' ,20]['goku',50]]

function Items(name, cost, icon){
    this.name = name
    this.cost = cost
    this.icon = icon
}

const pastorObj = new Items(tacos[0],20,icon1)