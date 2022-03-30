// TODO: write code here

const goblin = document.getElementsByClassName('goblin');

const random = () => {
  const randomGoblin = Math.floor(Math.random() * goblin.length);
  if (document.querySelector('.goblin_active')) {
    document.querySelector('.goblin_active').classList.remove('goblin_active');
  }
  goblin[randomGoblin].classList.add('goblin_active');
};

setInterval(random, 1000);
