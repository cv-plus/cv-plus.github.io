import {render, html} from './lib.js'

const skillsTemplate = (homeOffers,username) => html`
<p>skillsTemplate.</p>`

export async function skillsPage(ctx) {
    // updateLogin(null);
//   console.log('skillsPage')
  ctx.render(skillsTemplate());

}