import {render, html} from './lib.js'

const aboutTemplate = () => html`
<section class="about-me">
<p class="hi">Hi there I'M</p>
<div class="name">
    <p class="first-name">Georgi</p>
    <p class="last-name">Balabanov</p>
</div>
<div class="personal-info">
    <p class="current-job"><span class="green-me">Current Position:</span> Technical IT Consultant</p>
    <p class="current-job"><span class="green-me">Company:</span> Do It Wise</p>
    <!-- <p class="current-location"><span class="green-me"> <img src="/img/location.png" alt="" class="icon-skills"></span> Stara Zagora, Bulgaria</p> -->
   <div class="center-me">
    <img src="/img/location.png" alt="" class="icon-skills loc">
    <p class="current-location"> <span class="green-me">Stara Zagora,</span>  Bulgaria</p>

   </div>
   <p class="hi">Find me at:</p>
 
   <div class="wrapper">
   <div class="contact-div">
   <a target="_blank" href="https://t.me/georgi_balabanov"> <img class="icon-skills"
           src="/img/telegram.png" alt=""></a>
  
  </div>
 
 <div class="contact-div">
   
   <a target="_blank" href="https://github.com/git-Ball"> <img class="icon-skills gitHub" src="/img/github.png" alt="" ></a>
 
 
 
   
  
   
 
 </div>
 <div class="contact-div">
   <a target="_blank" href="https://bg.linkedin.com/in/georgi-balabanov-366501210"> <img class="icon-skills" src="/img/linkeIn.png" alt="" ></a>
 
 </div>

 <div class="contact-div">
   <img src="/img/mail.png" alt="" class="icon-skills mail-me">
   <p class="current-job my-mail hide">georgiballabanov@gmail.com</p>
 </div>
 </div>
</section>

`

export async function aboutPage(ctx) {
    // updateLogin(null);
//   console.log('aboutPage')
ctx.render(aboutTemplate());
let toggleMailTest = document.querySelector('.mail-me')
console.log(toggleMailTest)
let toggleMail = document.querySelector('.mail-me').addEventListener('click',()=>{
let myMail = document.querySelector('.my-mail')

console.log('CLICK')
if(myMail.classList.contains('hide')){
myMail.classList.remove('hide')

myMail.classList.toggle('show')

}
else{
myMail.classList.remove('show')

myMail.classList.toggle('hide')

}
})
}