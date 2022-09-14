// import {html,render} from '.'
// import {html,render} from './lib/lit-html.js'
// import page from '../node_modules/page'

import { aboutPage } from './about.js'
import { educationPage } from './education.js'
import {html,render, page} from './lib.js'
console.log('works')
const aboutCheck = document.querySelector('.about')
console.log(aboutCheck)
const root = document.querySelector('.main-content')
console.log(root)
page(decoration)
// page('/',()=> console.log('ABOUT your'));
page('/about',aboutPage)
page('/education',educationPage)

page.start()

function decoration(ctx,next){
    ctx.render = (content) => render(content,root)
      next()
    }