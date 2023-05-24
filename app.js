const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',

    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
let compteur = 0;
affecterProp(reviews[compteur]);
console.log('compteur init: ' + compteur);
const btn = document.getElementsByTagName('button');
const arr = Array.from(btn);

arr.forEach(function (unBoutton) {
  unBoutton.addEventListener('click', function (unBoutton) {
    console.log('compteur debut: ' + compteur);
    const styles = unBoutton.currentTarget.classList;

    if (compteur > 3) {
      compteur = 0;
    }

    if (styles.contains('btn')) {
      let elementReviews = reviews[getRandomInt(reviews.length)];
      affecterProp(elementReviews);
    }

    if (styles.contains('btn-right') && compteur < 3) {
      compteur++;
      let elementReviews = reviews[compteur];
      affecterProp(elementReviews);
    }

    if (styles.contains('btn-left') && compteur > 0) {
      compteur--;
      let elementReviews = reviews[compteur];
      affecterProp(elementReviews);
    }
    console.log('compteur fin: ' + compteur);
  });
});
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function affecterProp(review) {
  document.getElementById('img-portrait').src = review.img;
  document.getElementById('profil').textContent = review.name;
  document.getElementById('job').textContent = review.job;
  document.getElementById('info').textContent = review.text;
}
