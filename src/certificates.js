import {render, html} from './lib.js'

const certTemplate = (homeOffers,username) => html`
<p>CERT</p>`

export async function certificatesPage(ctx) {
    // updateLogin(null);
//   console.log('certificatesPage')
  ctx.render(certTemplate());
}