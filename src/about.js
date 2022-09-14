import {render, html} from './lib.js'

const aboutTemplate = () => html`
<p>Helloooooooooooooooooo</p>`

export async function aboutPage(ctx) {
    // updateLogin(null);
//   console.log('aboutPage')
ctx.render(aboutTemplate());
}