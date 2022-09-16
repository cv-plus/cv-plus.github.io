import {render, html} from './lib.js'

const contactTemplate = () => html`
<section class="contact-me">
    <i class="icon-test fas fa-cogs"></i>
    <!-- <a href="https://linkedin.com/in/oagapov/" target="_blank" class="hover:text-green-500"><img src="img/social_linkedin.png" alt="LinkedIn" class="inline w-8 h-8 mx-1 sm:ml-0 sm:mr-1"> linkedin.com/in/oagapov/</a> -->
</section>`

export async function contactPage(ctx) {
    // updateLogin(null);
  console.log('contactPage')
  ctx.render(contactTemplate());

}