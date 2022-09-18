import {render, html} from './lib.js'

const contactTemplate = () => html`
<section class="contact-me">
    <p class="hi">Find me at:</p>
 
    <div class="group-skills">
        
        <p class="current-job"><span class="dif-color"><img src="/img/mail.png" alt="" class="icon-skills"></span>georgiballabanov@gmail.com</p>
        <p class="current-job"><span class="dif-color"><img src="/img/mail.png" alt="" class="icon-skills"> <a target="_blank" href="https://bg.linkedin.com/in/georgi-balabanov-366501210"> Here</a>
        </span></p>
        <p class="current-job"><span class="dif-color">LinkedIn:</span><img src="/img/mail.png" alt="" class="icon-skills"></p>
     
       
        <a target="_blank" href="https://gcatering.github.io/"> <img class="icon-skills" src="/img/https.png" alt="" ></a>
        

    </div>
</section>`

export async function contactPage(ctx) {
    // updateLogin(null);
  console.log('contactPage')
  ctx.render(contactTemplate());

}