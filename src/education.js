import {render, html} from './lib.js'

const educationTemplate = () => html`
<p>educationTemplate</p>`

export async function educationPage(ctx) {
    // updateLogin(null);
  ctx.render(educationTemplate());

}