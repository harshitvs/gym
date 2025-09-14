// Feature Cards component
const features = [
  { icon: 'fa-solid fa-heart-pulse', title: 'Cardio Zone', desc: 'State-of-the-art cardio equipment for all levels.' },
  { icon: 'fa-solid fa-dumbbell', title: 'Strength Training', desc: 'Free weights and machines for muscle building.' },
  { icon: 'fa-solid fa-people-group', title: 'Group Classes', desc: 'Yoga, HIIT, Zumba, and more group sessions.' },
  { icon: 'fa-solid fa-user-tie', title: 'Personal Trainers', desc: 'Certified trainers to guide your fitness journey.' }
];
const featureCardsHTML = features.map(f => `
  <div class="feature-card">
    <i class="${f.icon} fa-2x"></i>
    <h3>${f.title}</h3>
    <p>${f.desc}</p>
  </div>
`).join('');
const cardsContainer = document.getElementById('feature-cards');
if (cardsContainer) cardsContainer.innerHTML = featureCardsHTML;
