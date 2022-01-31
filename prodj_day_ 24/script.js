const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name_card = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
	header.innerHTML = `
    <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="image"/>
    `;

	title.innerHTML = `Lorem ipsum dolor sit amet.`;
	excerpt.innerHTML =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, est.';
	profile_img.innerHTML = `
  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="photo" />
  `;
	name_card.innerHTML = 'John Doe';
	date.innerHTML = 'Jan 25, 2022';

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
