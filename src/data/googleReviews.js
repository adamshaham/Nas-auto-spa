/** NAS Auto Spa LLC — Google Business Profile reviews (synced from Google Search / Maps) */

export const GOOGLE_REVIEWS_URL =
  'https://share.google/whU8wUAAESFLZUJ3m';

export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 64;

export const GOOGLE_REVIEWS = [
  {
    name: 'Malcolm James',
    rating: 5,
    text:
      'My guy did a great job got my baby looking good. Will recommend them to anybody looking to get their cars detailed. Really looking forward to seeing how my fleet comes out.',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Michelle',
    rating: 5,
    text:
      'Huge shoutout to Shafi and his partner! They came right to me and did an amazing job detailing my cars. Super professional, thorough, and paid attention to every little detail. My cars look and feel like straight out of the showroom again!',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Shahrukh Ali',
    rating: 5,
    text:
      'Team was great. I got wheels freshly refinished and NAS Auto Spa ceramic coated my new wheels. Professional, made sure there was no sign of dirt before coating. Amazing work — will do business again.',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Luis Arroyo',
    rating: 5,
    text:
      'Great interior and exterior detail on my BMW M3! Flexible and will accommodate a busy schedule — they come to you. I was so impressed I signed up for their weekly wash package!',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Rafeh Nasir',
    rating: 5,
    text:
      'Honestly one of the best details I’ve gotten. Attention to detail was insane — interior spotless, paint shining, whole car felt brand new. You can tell real effort went into the work. Definitely coming back again.',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Liz',
    rating: 5,
    text:
      'Exceptional service from beginning to end! Professional and outstanding attention to detail. My vehicle was left sparkling clean and the entire experience exceeded my expectations. I highly recommend NAS Auto Spa!',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Tas Uddin',
    rating: 5,
    text:
      'Mobile detail service was 10/10! Scheduled last minute, they came early in the morning and did a great job while I was away. Will definitely use them again in the future.',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Colin Bauer',
    rating: 5,
    text:
      'Just got my new truck detailed and I am more than pleased. Got the smell of cigarettes right out of my interior and made my truck shine like never before. I would highly recommend to anyone.',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Amir Kovacevic',
    rating: 5,
    text:
      'Great crew — called, got a price, and they came the next day. Told me products to use to keep up with the interior. 100% recommend.',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Jon Kurt',
    rating: 5,
    text:
      'Brought my Tesla Model Y in for paint correction and I’m honestly impressed. Paint is super glossy and the swirl marks are gone. Super professional, easy to work with, and great vibes all around.',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Paul Tilkins',
    rating: 5,
    text:
      'Best detailers around. They had my dirty work truck looking like it just came off the lot! Amazing work and even better customer service.',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Raymil De Jesús',
    rating: 5,
    text:
      'Worth every penny! I took my car for a Stage 2 detail — looked new out of the dealership. 10/10 service, I would recommend to anyone!',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Noman Qayyum',
    rating: 5,
    text:
      'I got my car detailed and they did a really nice job. Prices are decent compared to others — highly recommended!',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Angela Rilley',
    rating: 5,
    text:
      "Got my mom's car detailed for her birthday and wow — her car looked brand new. Ended up getting my dad's car detailed too.",
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Xavier Sierra',
    rating: 5,
    text:
      'Great service, very professional. Left my car looking brand new. Definitely would go back!',
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Jahangir Khan',
    rating: 5,
    text:
      "I've been to almost 10 detailers in this area and no one does it like NAS. They went above and beyond and made my car brand new again.",
    link: GOOGLE_REVIEWS_URL,
  },
  {
    name: 'Rudy Carpio',
    rating: 5,
    text:
      'Fleet of company trucks — NAS Auto Spa took care of them and left them spotless. Trustworthy, on time, top quality.',
    link: GOOGLE_REVIEWS_URL,
  },
];

export const reviewInitial = (name) => {
  const trimmed = (name || '').trim();
  return trimmed ? trimmed.charAt(0).toUpperCase() : '?';
};

/** Mobile homepage hero carousel */
export const HERO_GOOGLE_REVIEWS = GOOGLE_REVIEWS.slice(0, 6);

export const toTestimonialCard = (review) => ({
  name: review.name,
  role: 'Verified Google Review',
  text: review.text,
  rating: review.rating,
  initial: reviewInitial(review.name),
});
