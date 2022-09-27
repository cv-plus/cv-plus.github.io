import {render, html} from './lib.js'

const contactTemplate = () => html`
<section class="contact-me">
    <p class="hi">Find me at:</p>
 
  <div class="wrapper">
  

<div class="contact-div">
  
  <a target="_blank" href="https://github.com/git-Ball"> <img class="icon-skills gitHub" src="/img/github.png" alt="" ></a>



  
  <!-- <p class="current-job"><span class="dif-color"><img src="/img/mail.png" alt="" class="icon-skills"> <a target="_blank" href="https://bg.linkedin.com/in/georgi-balabanov-366501210"> Here</a>
  </span></p>
  <p class="current-job"><span class="dif-color">LinkedIn:</span><img src="/img/mail.png" alt="" class="icon-skills"></p>

 
  <a target="_blank" href="https://gcatering.github.io/"> <img class="icon-skills" src="/img/https.png" alt="" ></a> -->
  

</div>
<div class="contact-div">
  <a target="_blank" href="https://bg.linkedin.com/in/georgi-balabanov-366501210"> <img class="icon-skills" src="/img/linkeIn.png" alt="" ></a>

</div>
<div class="contact-div">
  <img src="/img/mail.png" alt="" class="icon-skills mail-me">
  <p class="current-job my-mail hide">georgiballabanov@gmail.com</p>
</div>
</div>
</section>`

export async function contactPage(ctx) {
    // updateLogin(null);
  console.log('contactPage')


  ctx.render(contactTemplate());
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