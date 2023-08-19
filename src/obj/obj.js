export {pastorObj, especialGokuObj}
import {icon1, icon2} from '../icons/makeIcon.js'



const tacos = ['Pastor','Cesina','Cabeza',`Especial Goku` ,'Campechano', ]
const precios = [['taco' ,20]['goku',50]]

function Items(name, cost, icon ){
    this.name = name
    this.cost = cost
    this.icon = icon
}

const pastorObj = new Items(tacos[0],20,icon2)
const especialGokuObj = new Items(tacos[3], 100, icon1)