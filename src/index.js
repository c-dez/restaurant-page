export {content}

import {menu} from '../src/modules/menu.js'

// import {background} from '../src/modules/layout.js'
import { makeContentElement } from './modules/content.js'

const content = document.querySelector('#content')
makeContentElement()

content.appendChild(menu())

