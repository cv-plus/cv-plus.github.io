import {render, html} from './lib.js'

const interestsTemplate = (homeOffers,username) => html`
<section class="interests">
<p class="hi">In my free time I enjoy to do..</p>


<div class="group-skills">
    <img src="/img/mtb.png" alt="" class="icon-skills">
    <img src="/img/climbing.png" alt="" class="icon-skills">
    <img src="/img/paragliding.png" alt="" class="icon-skills">
    <img src="/img/yoga.png" alt="" class="icon-skills yoga">
    <img src="/img/ski.png" alt="" class="icon-skills">
    <img src="/img/calisthenics.png" alt="" class="icon-skills">
    <img src="/img/hikinh.png" alt="" class="icon-skills">



</div>

</section>`

export async function interestsPage(ctx) {
    // updateLogin(null);

  ctx.render(interestsTemplate());

}