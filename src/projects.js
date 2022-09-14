import {render, html} from './lib.js'

const projectsTemplate = (homeOffers,username) => html`
<p>projectsTemplate</p>`

export async function projectPage(ctx) {
    // updateLogin(null);
//   console.log('projectPage')
  ctx.render(projectsTemplate());

}