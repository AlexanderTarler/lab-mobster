import './style.css';
import fetch from 'node-fetch';

const mob = fetch(
  'lab-mobster-backend-production-3867.up.railway.app/mobs/1',
).then((response) => console.log(response));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
<h1>Mobster</h1>
</header>
<main>
<div class="member">member</div>
<div class="member">member</div>
<div class="member">member</div>
<div class="member">member</div>
</main>
</div>`;
