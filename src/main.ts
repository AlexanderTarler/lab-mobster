import './style.css';

// Implementation code where T is the returned data shape
function api<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

// Consumer

const general = async () => {
  const mob = await api<{ name: string; mobId: string }>(
    'https://lab-mobster-backend-production-3867.up.railway.app/mobs/1',
  )
    .then(({ name, mobId }) => {
      return { name: name, mobId: mobId };
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(mob);
  const mobMembers: any = await api(
    'https://lab-mobster-backend-production-3867.up.railway.app/mobs/1/members',
  )
    .then((array) => {
      return array;
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(mobMembers);
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<header>
<h1>${mob!.name}</h1>
</header>
<main>
<div class="member">${mobMembers[0].name}</div>
<div class="member">${mobMembers[1].name}</div>
<div class="member">${mobMembers[2].name}</div>
<div class="member">${mobMembers[3].name}</div>

</main>
</div>`;
};
general();
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
