import {render, html} from './lib.js'

const educationTemplate = () => html`
<section class="education" id="exp">
    <p class="hi">Experience</p>
    <div class="personal-info">
        <p class="current-job"><span class="green-me">Period:</span> Feb 2021 - 2022 may </p>
        <p class="current-job"><span class="green-me">Software University</span> SoftUni</p>
        
        <p class="current-location"><span class="green-me">Courses:</span> </p>
        <ul class="activities">Angular (Building Single Page Applications with Angular)</ul>
        <ul class="activities">JavaScript Back-End (Building back-end applications and REST API with Express.js and MongoDB.) </ul>
        <ul class="activities">JavaScript Application (HTTP, REST Services, AJAX, Single Page Applications, Remote Data and Authentications, Client-Side Rendering, Routing, Modular Applications, End to End Application with Vanilla JS) </ul>
        <ul class="activities">JavaScript Advanced (DOM Manipulations and Events, Advanced Functions, Unit Testing (Mocha & Chai), Interactive Applications)</ul>
        <ul class="activities">HTML & CSS Fundamentals</ul> 
        <ul class="activities">Fundamentals with JavaScript</ul> 
        <ul class="activities">JavaScript Basics</ul> 
    </div>
    <div class="personal-info">
        <p class="current-job"><span class="green-me">Period:</span> 2010-2012</p>
        <p class="current-job"><span class="green-me">Role:</span> Internet Technician</p>
        <p class="current-job"><span class="green-me">Company:</span> Internet Group</p>
        <p class="current-location"><span class="green-me">Activities:</span> </p>
        <ul class="activities">Building cabling infrastructure of the business buildings </ul>
        <ul class="activities">Support and developing of networking </ul>
        <ul class="activities">Meeting customer\`s needs </ul>
        <ul class="activities">Problem solving and Troubleshooting </ul>
        <ul class="activities">Installation of hardware devices</ul>
    </div>
</section>
`

export async function educationPage(ctx) {
    // updateLogin(null);
  ctx.render(educationTemplate());

}