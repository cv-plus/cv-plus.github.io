import {render, html} from './lib.js'

const interestsTemplate = (homeOffers,username) => html`
<section class="interests">
        <p class="hi">Hobbies</p>
        <!-- <div class="name">
            <p class="first-name">Georgi</p>
            <p class="last-name">Balabanov</p>
        </div> -->

        <div class="group-skills">
            <img src="/img/mtb.png" alt="" class="icon-skills">
            <img src="/img/hikinh.png" alt="" class="icon-skills">

            <img src="/img/paragliding.png" alt="" class="icon-skills">
            <img src="/img/climbing.png" alt="" class="icon-skills">

            <img src="/img/yoga.png" alt="" class="icon-skills">
            <img src="/img/ski.png" alt="" class="icon-skills">
            <img src="/img/calisthenics.png" alt="" class="icon-skills">

 

        </div>
        <!-- <div class="personal-info">
            <p class="current-job">Currently: Technical IT Consultant</p>
            <p class="current-job">Company: Do It Wise</p>
            <p class="current-location">Location: Stara Zagora, Bulgaria</p>
           
        </div> -->
    </section>`

export async function interestsPage(ctx) {
    // updateLogin(null);

  ctx.render(interestsTemplate());

}