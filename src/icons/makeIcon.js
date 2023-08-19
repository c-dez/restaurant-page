export {icon1 , icon2}

// const image = new Image()
const image = "url('  https://i.pinimg.com/originals/b4/2e/67/b42e675877d895fd03cba844b62539e2.jpg  ')"
const imageTest = "url('../img/sayu.jpg')"


const makeIcon =(url)=>{
    const element = document.createElement('img')
    element.style.height = '75px'
    element.style.width = '75px'
    element.style.borderRadius = '50%'
    element.style.backgroundSize ='cover'
    element.style.backgroundImage = url
    element.style.border = '5px solid white'
    element.style.boxSizing = 'border-box'
    // 
    
    return element
}

const icon1 = makeIcon(imageTest)
const icon2 = makeIcon(image)