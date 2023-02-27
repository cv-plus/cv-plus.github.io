import {render, html} from './lib.js'

const skillsTemplate = (homeOffers,username) => html`
<section class="my-skills">
<p class="hi">Technical skills</p>
<div class="group-skills">
<img src="/img/js.png" class="icon-skills" alt="Java Script" title="Java Script">
<img src="/img/ajax.png" class="icon-skills" alt="AJAX" title="AJAX">

<img src="/img/html.png" class="icon-skills" alt="HTML" title="HTML">
<img src="/img/css.png" class="icon-skills" alt="CSS" title="CSS">
<img src="/img/MongoDB.png" class="icon-skills" alt="MongoDB" title="MongoDB">
<img src="/img/express.png" class="icon-skills" alt="ExpressJS" title="ExpressJS">
<img src="/img/angular.png" class="icon-skills" alt="Angular" title="Angular">
<img src="/img/ts.png" class="icon-skills" alt="Type Script" title="Type Script">
<img src="/img/responsiveDesign.png" class="icon-skills" alt="Responsive design" title="Responsive design">
<img src="/img/servicenow..png" class="icon-skills"alt="ServiceNow" title="ServiceNow">
<img src="/img/API.png" class="icon-skills" alt="API" title="API">
<img src="/img/ux.png" class="icon-skills" alt="UX" title="UX">


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

<!-- 3rd -->
<div class="group-skills">
<p class="hi">Familiar with</p>

<img src="/img/windows.png" alt="Windows" title="Windows" class="icon-skills">
        <img src="/img/linux.png" alt="Linux" title="Linux" class="icon-skills">
        
        <img src="/img/virtualization.png" alt="Virtualization" title="Virtualization" class="icon-skills">
        <img src="/img/mySql.png" alt="MySQL" title="MySQL" class="icon-skills">
        <img src="/img/dockler.png" alt="Docker" title="Docker" class="icon-skills">
        <img src="/img/jira.png" alt="Jira" title="Jira" class="icon-skills">
        <img src="/img/figma.png" alt="Figma" title="Figma" class="icon-skills">
        



</div>

</div>
</section>
`

export async function skillsPage(ctx) {
    // updateLogin(null);
//   console.log('skillsPage')
  ctx.render(skillsTemplate());

}