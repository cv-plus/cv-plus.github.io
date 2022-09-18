import {render, html} from './lib.js'

const projectsTemplate = (homeOffers,username) => html`
<section class="my-projects">
<p class="hi">My Projects</p>
<!-- <div class="name">
    <p class="first-name">Georgi</p>
    <p class="last-name">Balabanov</p>
</div> -->
<div class="group-skills">
<div class="personal-info">
    <p class="current-job"><span class="dif-color">Project:</span>Catering landing page</p>
    <p class="current-job"><span class="dif-color">Description:</span>Single Page Application,
        all the futures in the project are client requirements:
        <ul>- SPA with static content.</ul>
        <ul>- Responsive design with special behavior and requirements for desktop, tablet and mobile use.</ul>
        <ul>- Photo viewer with glider sideways functionality at bottom section.</ul>
        <ul>- Auto show/hide back to top Arrow.</ul>
        <ul>- Hamburger menu for mobile devices.</p></ul>
        
        
        
        
        
    <!-- <p class="current-location"><span class="dif-color">Technology:</span> JS</p> -->
    
    <p class="current-job"><span class="dif-color">Technology:</span></p>

    
        <img src="/img/js.png" alt="" class="icon-skills">
       <img src="/img/html.png" alt="" class="icon-skills">
        <img src="/img/css.png" alt="" class="icon-skills">
             <img src="/img/MongoDB.png" alt="" class="icon-skills">
        <img src="/img/responsiveDesign.png" alt="" class="icon-skills">
        

    <p class="current-job"><span class="dif-color">Find project at</span></p>
    <a target="_blank" href="https://gcatering.github.io/"> <img class="icon-skills" src="/img/https.png" alt="" ></a>
    <a target="_blank" href="https://github.com/gCatering/gCatering.github.io"> <img class="icon-skills" src="/img/github.png" alt="" ></a>
</div>
   
</div>


<div class="personal-info">
    <p class="current-job"><span class="dif-color">Project:</span>Online market for mountain bikes</p>
    <p class="current-job"><span class="dif-color">Description:</span>Functionality:
        Custom errors, notification and validations in all forms.
        <p class="current-job"><span class="dif-color">Guest users can:</span></p>
        
        <ul>- - Review entire collection with offers.</ul>
        <ul>- Filter offers by categories.</ul>
        <ul>- Details for every offer.</ul>
        <ul>- Read comments in offers.</ul>
        <ul>- Hamburger menu for mobile devices.</ul>
        <p class="current-job"><span class="dif-color">Logged users can:</span></p>

        <ul>- All guest functionality.</ul>
        <ul>- Creating new offers in three categories.</ul>
        <ul>- Edit and delete own offers.</ul>
        <ul>- Access to their own offers.</ul>
        <ul>- Leave comments in offers</ul>
      <p class="current-job"><span class="dif-color">Backend and database:</span></p>
      <ul>- Back4App platform with custom collections for users, categories, offers.</ul>
        </p>
    
        
        
        
        
        
    <!-- <p class="current-location"><span class="dif-color">Technology:</span> JS</p> -->
    
    <p class="current-job"><span class="dif-color">Technology:</span></p>

    <div class="group-skills">
        <img src="/img/js.png" alt="" class="icon-skills">
        <img src="/img/ajax.png" alt="" class="icon-skills">
       <img src="/img/html.png" alt="" class="icon-skills">
        <img src="/img/css.png" alt="" class="icon-skills">
        <img src="/img/MongoDB.png" alt="" class="icon-skills">
        <img src="/img/responsiveDesign.png" alt="" class="icon-skills">
        

   
    <p class="current-job"><span class="dif-color">Find project at</span></p>
    <a target="_blank" href="https://gcatering.github.io/"> <img class="icon-skills" src="/img/https.png" alt="" ></a>
    <a target="_blank" href="https://github.com/gCatering/gCatering.github.io"> <img class="icon-skills" src="/img/github.png" alt="" ></a>
</div>
</div>


<div class="personal-info">
    <p class="current-job"><span class="dif-color">Project:</span>Cooking portal</p>
    <p class="current-job"><span class="dif-color">Description:</span>Angular project for SoftUni Angular course. Online platform for recipes sharing. This project was generated with Angular CLI version 13.2.5.
        <p class="current-job"><span class="dif-color">Functionality:</span></p>
        <ul>- Custom errors and validation in all forms.</ul>
        <ul>- Responsive Design.</ul>
        
        <p class="current-job"><span class="dif-color">Guest users can:</span></p>
        
        
        
        
        
        <ul>- Review entire collection with recipes.</ul>
        <ul>- Details for every recipe, without info for owner.</ul>
        <ul>- Details for every offer.</ul>
        <ul>- Search for recipes.</ul>
        <ul>- Hamburger menu for mobile devices.</ul>
        <p class="current-job"><span class="dif-color">- Logged users can:</span></p>
        
        
        
        
        
        
        

        <ul>- All guest functionality.</ul>
        <ul>- Creating new recipes.</ul>
        <ul>- Edit and delete own recipes.</ul>
        <ul>- Like others recipes.</ul>
        <ul>- Access to their own recipes.</ul>
        <ul>- Access to profile page with info for user(account created, username and total likes) and own liked recipes.</ul>
        <ul>- Access to other users profile with recipes list.</ul>
      <p class="current-job"><span class="dif-color">Backend and database:</span></p>
      
    <ul>- Back4App platform with custom collections for users and recipes.</ul>
</p>
    
        
        
        
        
        
    <!-- <p class="current-location"><span class="dif-color">Technology:</span> JS</p> -->
    
    <p class="current-job"><span class="dif-color">Technology:</span></p>

    <div class="group-skills">
        <img src="/img/js.png" alt="" class="icon-skills">
        <img src="/img/ajax.png" alt="" class="icon-skills">
       <img src="/img/html.png" alt="" class="icon-skills">
        <img src="/img/css.png" alt="" class="icon-skills">
        <img src="/img/angular.png" alt="" class="icon-skills">
        <img src="/img/MongoDB.png" alt="" class="icon-skills">
        <img src="/img/responsiveDesign.png" alt="" class="icon-skills">
        

   
    <p class="current-job"><span class="dif-color">Find project at</span></p>
    <a target="_blank" href="https://gcatering.github.io/"> <img class="icon-skills" src="/img/https.png" alt="" ></a>
    <a target="_blank" href="https://github.com/gCatering/gCatering.github.io"> <img class="icon-skills" src="/img/github.png" alt="" ></a>
</div>
</div>

</section>`

export async function projectPage(ctx) {
    // updateLogin(null);
//   console.log('projectPage')
  ctx.render(projectsTemplate());

}