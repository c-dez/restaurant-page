export {tacosObj}

const tacos = ['Pastor','Cesina','Cabeza', 'Campechano', 'Especial Goku']

function Items(name, cost, imgUrl){
    this.name = name
    this.cost = cost
    this.imgUrl = imgUrl
}

const tacosObj = new Items(tacos[0],'','')