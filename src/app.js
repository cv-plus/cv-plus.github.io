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

// document
// .querySelectorAll('.opotions')
// .forEach(
//     (button)=>
//      button.innerHTML =
// '<div> <span>'+
//  button.textContent.trim().split('').join('</span></div>') +
// '</span></div>');
// const aboutCheck = document.querySelector('.about')
// console.log(aboutCheck)
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
 let allBtnsFromMenu = document.querySelectorAll('.options').forEach(element => {
   addEventListener('click',projectOptions)
 });
//  let allBtnsFromMenu = document.querySelectorAll('.options').forEach((btn) => btn.addEventListener('click'),projectOptions)
  //.addEventListener('click',projectOptions)
  // allBtnsFromMenu.forEach(addEventListener('click',projectOptions))
 console.log(allBtnsFromMenu)
// let projectBtn = document.querySelector('.projects-btn').addEventListener('click', projectOptions)
  function projectOptions(e){
    // console.log(e)
  let mainContent = document.querySelector('.main-content')

    let eTarget = e.target;
   if(eTarget.classList.contains('projects-btn') ||eTarget.classList.contains('education')){
  mainContent.style.width = '75%'
  console.log('flip')

   }
   else{
  mainContent.style.width = '60%'

   }
  // let mainContent = document.querySelector('.main-content')
  // mainContent.style.width = '75%'
  }