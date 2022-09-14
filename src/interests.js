import {render, html} from './lib.js'

const interestsTemplate = (homeOffers,username) => html`
<p>Hello G.</p>`

export async function interestsPage(ctx) {
    // updateLogin(null);

  ctx.render(interestsTemplate());

}