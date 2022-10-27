import {render, html} from './lib.js'

const interestsTemplate = () => html`
<section class="interests">
<p class="hi">In my free time I enjoy to do..</p>
<!-- <div class="name">
    <p class="first-name">Georgi</p>
    <p class="last-name">Balabanov</p>
</div> -->

<div class="group-skills">
    <img src="/img/mtb.png" alt="" class="icon-skills">
    <img src="/img/climbing.png" alt="" class="icon-skills">
    <img src="/img/paragliding.png" alt="" class="icon-skills">
    <img src="/img/yoga.png" alt="" class="icon-skills yoga">
    <img src="/img/ski.png" alt="" class="icon-skills">
    <img src="/img/calisthenics.png" alt="" class="icon-skills">
    <img src="/img/hikinh.png" alt="" class="icon-skills">



</div>
<!-- <div class="personal-info">
    <p class="current-job">Currently: Technical IT Consultant</p>
    <p class="current-job">Company: Do It Wise</p>
    <p class="current-location">Location: Stara Zagora, Bulgaria</p>
   
</div> -->

<p class="hi">Some of my moments..</p>

<div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
      <li class="glide__slide "><img class="certs plus" src="img/hobby/g5.jpg" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/b2.JPG" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/c1.JPG" alt=""></li>
      
      <li class="glide__slide"><img class="certs plus" src="img/hobby/h2.jpg" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/y1.JPG" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/g3.jpg" alt=""></li>
      
      <li class="glide__slide"><img class="certs plus" src="img/hobby/c2.jpg" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/h1.jpg" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/g7.jpg" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/c5.jpg" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/g6.jpg" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/g4.jpg" alt=""></li>
        
      <li class="glide__slide"><img class="certs plus" src="img/hobby/b3.JPG" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/s1.jpg" alt=""></li>

      <li class="glide__slide"><img class="certs plus" src="img/hobby/c6.JPG" alt=""></li>
    
      <li class="glide__slide"><img class="certs plus" src="img/hobby/s2.jpg" alt=""></li>
      <li class="glide__slide"><img class="certs plus" src="img/hobby/b4.JPG" alt=""></li>
      </ul>
    </div>
    <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
      </div>
  </div>
</section>
`

export async function interestsPage(ctx) {
    // updateLogin(null);

  ctx.render(interestsTemplate());
  
  const config= {
    type:'carousel',
    perView:3,
    autoplay: 2000,
    breakpoints:{
      1024: {
        perView: 2
      },
      860:{
        perView:1
      }
    }
  }
  new Glide('.glide',config).mount()
 
}

