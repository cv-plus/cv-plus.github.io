import {render, html} from './lib.js'

const skillsTemplate = (homeOffers,username) => html`
<section class="my-skills">
<p class="hi">Technical skills</p>
<div class="group-skills">
    <img src="/img/js.png" alt="" class="icon-skills">
    <img src="/img/ajax.png" alt="" class="icon-skills">

    <img src="/img/html.png" alt="" class="icon-skills">
    <img src="/img/css.png" alt="" class="icon-skills">
    <img src="/img/MongoDB.png" alt="" class="icon-skills">
    <img src="/img/express.png" alt="" class="icon-skills">
    <img src="/img/angular.png" alt="" class="icon-skills">
    <img src="/img/ts.png" alt="" class="icon-skills">
    <img src="/img/responsiveDesign.png" alt="" class="icon-skills">

</div>
<p class="hi">Soft skills</p>

<div class="soft-skills">
    <!-- <div class="soft-skills">

</div> -->
    <div class="soft-section">
        <img src="/img/comunication.png" alt="" class="icon-skills">
        <p class="green-me">Comunication</p>
    </div>
    <div class="soft-section">
        <img src="/img/teamPlayer.png" alt="" class="icon-skills">
        <p class="green-me">Team Player</p>
    </div>
    <div class="soft-section">
        <img src="/img/creativity.png" alt="" class="icon-skills">
        <p class="green-me">Creativity</p>
    </div>
    <div class="soft-section">
        <img src="/img/problemSolving.png" alt="" class="icon-skills">
        <p class="green-me">Problem Solving</p>
    </div>
    <div class="soft-section">
        <img src="/img/fastLearner.png" alt="" class="icon-skills">
        <p class="green-me">Fast Learner</p>
    </div>
    <div class="soft-section">
        <img src="/img/discipline.png" alt="" class="icon-skills">
        <p class="green-me">Discipline</p>
    </div>
</div>

</div>
</section>`

export async function skillsPage(ctx) {
    // updateLogin(null);
//   console.log('skillsPage')
  ctx.render(skillsTemplate());

}