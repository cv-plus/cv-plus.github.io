// import {html,render} from '.'
// import {html,render} from './lib/lit-html.js'
// import page from '../node_modules/page'

import { aboutPage } from './about.js'
import { certificatesPage } from './certificates.js'
import { contactPage } from './contact.js'
import { educationPage } from './education.js'
import { interestsPage } from './interests.js'
import {html,render, page} from './lib.js'
import { projectPage } from './projects.js'
import { skillsPage } from './skills.js'
console.log('works')
const aboutCheck = document.querySelector('.about')
console.log(aboutCheck)
const root = document.querySelector('.main-content')
console.log(root)
page(decoration)

page('/about',aboutPage)
page('/',aboutPage)
page('/education',educationPage)
page('/skills',skillsPage)
page('/projects',projectPage)
page('/certificates',certificatesPage)
page('/interests',interestsPage)
page('/contact',contactPage)

page.start()

function decoration(ctx,next){
    ctx.render = (content) => render(content,root)
      next()
    }