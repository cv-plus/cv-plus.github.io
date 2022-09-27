import {render, html} from './lib.js'

const aboutTemplate = () => html`
<section class="about-me">
<p class="hi">Hi there I'M</p>
<div class="name">
    <p class="first-name">Georgi</p>
    <p class="last-name">Balabanov</p>
</div>
<div class="personal-info">
    <p class="current-job"><span class="green-me">Current Position:</span> Technical IT Consultant</p>
    <p class="current-job"><span class="green-me">Company:</span> Do It Wise</p>
    <p class="current-location"><span class="green-me">Location:</span> Stara Zagora, Bulgaria</p>
    <a class="hover-me contactBtn" href="/contact">Contact me</a>
</div>
</section>`

export async function aboutPage(ctx) {
    // updateLogin(null);
//   console.log('aboutPage')
ctx.render(aboutTemplate());
}