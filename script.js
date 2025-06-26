function curiosidades() {
  const curiosidade = [
    "Sabe que seu sorriso devia ser estudado? Porque é capaz de melhorar qualquer dia.",
    "Curiosidade: tem gente que acha que só as estrelas brilham, mas acho que você também.",
    "Você tem um jeito único de deixar o ambiente mais leve, sabia?",
    "Dizem que curiosidade matou o gato, mas eu só queria descobrir o segredo do seu charme.",
    "Se eu pudesse, colocaria seu nome em todas as minhas playlists, só pra não esquecer o quanto você é incrível.",
    "Tem uma coisa que eu não consigo esconder: fico curioso toda vez que você aparece.",
    "Você sabia que um simples ‘oi’ seu faz meu dia valer a pena?",
    "Eu não sou cientista, mas acho que tem química entre a gente.",
    "Curiosidade: já reparou como seu olhar consegue parar o tempo?",
    "Você tem esse jeito que deixa tudo mais bonito, e olha que não é só aparência, viu?",
    "Acho que você devia ser museu, porque toda vez que te vejo eu fico admirando.",
    "Tem algo na sua voz que é como música — dá vontade de ouvir o dia todo.",
    "Será que é só impressão, ou você deixa tudo ao seu redor mais iluminado?",
    "Curiosidade: seu jeito de ser faz parecer que o mundo ficou melhor.",
    "Se a beleza fosse um crime, você já estaria presa.",
    "Você é como aquele livro que a gente não quer largar, sempre intrigante.",
    "Já percebeu como você é capaz de transformar qualquer conversa em algo especial?",
    "Se eu tivesse que definir charme, acho que usaria seu nome.",
    "Só uma dúvida: você é feita de magia, né?",
    "Curiosidade: você tem o poder de deixar qualquer pessoa mais feliz só por estar perto.",
  ];
  const randomIndex = Math.floor(Math.random() * 20);
  return curiosidade[randomIndex]

}

function notificar() {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      new Notification("Além de bonita é curiosa?", {
        body: "aqui vai uma mensagem: "+curiosidades(),
        icon: "icons/icon-192.png"
      });
    }
  });
}
const container = document.querySelector('.container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Tamanho aleatório entre 10 e 30 px
  const size = Math.random() * 20 + 10;
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  // Posição horizontal aleatória (0 a 100vw)
  heart.style.left = Math.random() * 100 + 'vw';

  // Tempo da animação entre 5 e 15 segundos
  const duration = Math.random() * 4 + 3;
  heart.style.animationDuration = duration + 's';

  // Delay aleatório para não ficar tudo junto
  heart.style.animationDelay = (Math.random() * 3) + 's';

  container.appendChild(heart);

  // Remove o coração depois da animação para não lotar o DOM
  setTimeout(() => {
    heart.remove();
  }, duration * 1000 + 1000);
}

// Criar um coração novo a cada 300ms
setInterval(createHeart, 300);
