import {render, html} from './lib.js'

const certTemplate = () => html`
<section class="cert">
<p class="hi">Check my certificates..</p>

<div class="glider">
    <div class="certs"> <img src="img/cert/pb.jfif" alt=""> </div>
    <div class="certs"> <img src="img/cert/pf.jfif" alt=""> </div>
    <div class="certs"> <img src="img/cert/Advanced.jfif" alt=""> </div>
    <div class="certs"> <img src="img/cert/applications.jfif" alt=""> </div>
    <div class="certs"> <img src="img/cert/back end.jfif" alt=""> </div>
    <div class="certs"> <img src="img/cert/angular.jfif" alt=""> </div>
    <div>


</div>
<button aria-label="Previous" class="glider-prev">«</button>
<button aria-label="Next" class="glider-next">»</button>
<div role="tablist" class="dots"></div>
</section>
`

export async function certificatesPage(ctx) {
    // updateLogin(null);
//   console.log('certificatesPage')
  ctx.render(certTemplate());
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
}