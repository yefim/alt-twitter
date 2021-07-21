const REMARKS = [
  'Consider shaming them respectfully.',
  'Maybe they had a good reason.',
  'Wow, what a meanie.',
  'How could they do such a thing?',
  'I hope they have a good day.',
  'Please remind them gently over DM.',
  'Do you think this image needs a description?',
  'I can\'t believe they\'ve done this.',
  '🙈',
  'Oh no, what happens now?',
  'Tweet at them passive aggressively to let them know.',
  'It\'s okay though because this image definitely doesn\'t need one. I\'ve checked.',
];

document.addEventListener('DOMNodeInserted', (event) => {
  const el = event.target;

  if (el?.alt) {
    // An HTML element's title is a hoverable tooltip.
    el.title = el.alt === 'Image' ? `OP did not add an alt. ${REMARKS[Math.floor(Math.random() * REMARKS.length)]}` : el.alt;
  }
});
