import { makeMenu } from "./modules/menu.js"
const menu = makeMenu()


const content = document.querySelector('#content')
content.appendChild(menu)

