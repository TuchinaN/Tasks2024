const form = document.getElementById('form');
const log = document.getElementById('log');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  log.textContent = '';

  const n = parseInt(form.elements.n.value);
  const m = parseInt(form.elements.m.value);
  const b = parseInt(form.elements.b.value);
  const r = parseInt(form.elements.r.value);
  const t = parseInt(form.elements.t.value);

  if (b > m) {
    log.textContent = 'Проблемка: Котики слишком прожорливы, в миске нет столько корма...';
    return;
  }

  let time = 0;
  let bowl = m;
  let cats = [];

  for (let i = 1; i <= n; i++) {
    cats.push({ id: i, waiting: false, eating: false });
  }

  while (cats.length > 0) {
    const cat = cats.shift();
    cat.waiting = true;
    log.textContent += `Котик ${cat.id} подкрался к миске.\n`;

    if (bowl >= b) {
      cat.eating = true;
      bowl -= b;
      log.textContent += `Котик ${cat.id} увлечённо принялся кушать.\n`;
      await new Promise(resolve => setTimeout(resolve, t * 1000));
      log.textContent += `Котик ${cat.id} забрал последний кусочек и убежал.\n`;
    } else {
      log.textContent += `Бабушка наполняет миску новой порцией.\n`;
      await new Promise(resolve => setTimeout(resolve, r * 1000));
      bowl = m;
      log.textContent += `Бабушка отошла от полной миски, чтобы не смущать котика.\n`;
      cats.unshift(cat);
      continue;
    }

    cat.waiting = false;
    cat.eating = false;
    time += t;
  }

  log.textContent += `\nОбщее время подкармливания составило: ${time} секунд`;
});
