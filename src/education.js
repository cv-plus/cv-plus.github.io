import {render, html} from './lib.js'

const educationTemplate = () => html`
<section class="education" id="exp">
    <p class="hi">Experience</p>
    <div class="personal-info">
    <p class="current-job"><span class="green-me">Period:</span> April 2022 - Till today </p>
        <p class="current-job"><span class="green-me">Role:</span> IT Consultant</p>
        <p class="current-job"><span class="green-me">Company:</span> Do IT Wise</p>
       
        <p class="current-location"><span class="green-me">Progress:</span> </p>
        <ul class="activities">Certified System Administration (Certified)</ul>
        <ul class="activities">ServiceNow Discovery (Certified)</ul>
        <ul class="activities">ServiceNow CMDB (Micro Certified)</ul>
        <ul class="activities">ServiceNow CMDB Health (Micro Certified)</ul>
        <ul class="activities">ServiceNow Service Mapping (Certified)</ul>


    </div>
    <div class="personal-info">
        <p class="current-job"><span class="green-me">Period:</span> June - August 2022</p>
   
        <p class="current-job"><span class="green-me">Company:</span> Do IT Wise</p>
        <p class="current-job"><span class="green-me">Education:</span> Do IT Wise Academy</p>
        <p class="current-location"><span class="green-me">Topics Covered:</span> </p>
        <ul class="activities">ServiceNow Fundamentals</ul>
        <ul class="activities">ServiceNow Discovery</ul>
        <ul class="activities">ServiceNow CMDB</ul>
        <ul class="activities">ServiceNow CSDM</ul>
        <ul class="activities">Scripting in ServiceNow</ul>
        <ul class="activities">SAFe</ul>
        <ul class="activities">Introduction to ITIL</ul>
        <ul class="activities">Services, Servers, Monitoring Concepts</ul> 
        <ul class="activities">Networking & Operating Systems (Linux)</ul>
        <ul class="activities">File Formats, Databases</ul>
        <ul class="activities">Virtualization & Containers</ul>
        <ul class="activities">Cloud Infrastructures</ul>
        <span class="green-me">Activities:</span>
        <ul class="activities">Coming soon..</ul>
        <ul class="activities">Coming soon..</ul>
        <ul class="activities">Coming soon..</ul>

    </div>
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