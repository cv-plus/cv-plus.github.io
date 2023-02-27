import {render, html} from './lib.js'
// import {Glide} from '../node_modules/@glidejs'
const certTemplate = () => html`
<section class="cert">
    <p class="hi">I get certified at..</p>

    <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide "><img class="certs" src="img/cert/pb.jfif" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/pf.jfif" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/Advanced.jfif" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/applications.jfif" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/angular.jfif" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/back end.jfif" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/csa.JPG" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/discovery.JPG" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/academy.jpg" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/academyBack.JPG" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/serviceMapping.jpg" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/ux-cert.PNG" alt=""></li>
            <li class="glide__slide"><img class="certs" src="img/cert/js_intermediate+.jpg" alt=""></li>
         
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
            <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
            <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
          </div>
      </div>
      
      
      
        
      
</section>
`

export async function certificatesPage(ctx) {
    // updateLogin(null);
//   console.log('certificatesPage')
  ctx.render(certTemplate());
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


// new Glider(document.querySelector('.glider'), {
//   slidesToShow: '3',


//   slidesToScroll: '1',
//   duration: 0.75,
//   draggable: true,
//   dots: '.dots',
//   arrows: {
//     prev: '.glider-prev',
//     next: '.glider-next'
//   }
// });



// const certTemplate = () => html`
// <section class="cert">
// <p class="hi">Check my certificates..</p>

// <div class="glider">
//     <div class="certs"> <img src="img/cert/pb.jfif" alt=""> </div>
//     <div class="certs"> <img src="img/cert/pf.jfif" alt=""> </div>
//     <div class="certs"> <img src="img/cert/Advanced.jfif" alt=""> </div>
//     <div class="certs"> <img src="img/cert/applications.jfif" alt=""> </div>
//     <div class="certs"> <img src="img/cert/back end.jfif" alt=""> </div>
//     <div class="certs"> <img src="img/cert/angular.jfif" alt=""> </div>
    


// </div>
// <button aria-label="Previous" class="glider-prev">«</button>
// <button aria-label="Next" class="glider-next">»</button>
// <div role="tablist" class="dots"></div>
// </section>
// `