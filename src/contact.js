import {render, html} from './lib.js'

const contactTemplate = () => html`
<p>contactPage</p>`

export async function contactPage(ctx) {
    // updateLogin(null);
  console.log('contactPage')
  ctx.render(contactTemplate());

}