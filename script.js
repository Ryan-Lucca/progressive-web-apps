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
        body: "aqui vai uma mensagem: " + curiosidades(),
        icon: "icons/icon-192.png"
      });
    }
  });

  const mensagem = curiosidades();

  // Criar o fundo escuro (overlay)
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlay.style.display = "flex";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.zIndex = "9999999";

  // Criar o card da mensagem
  const card = document.createElement("div");
  card.style.backgroundColor = "#fff";
  card.style.padding = "20px";
  card.style.borderRadius = "10px";
  card.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
  card.style.maxWidth = "80%";
  card.style.textAlign = "center";
  card.innerHTML = `
    <h2>Além de bonita é curiosa?</h2>
    <p>${mensagem}</p>
  `;

  // Adiciona os elementos no body
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  // Função para remover o card
  function fecharCard() {
    if (document.body.contains(overlay)) {
      document.body.removeChild(overlay);
    }
  }

  

  // Evento para fechar clicando no fundo escuro
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      fecharCard();
    }
  });

  // Fechar automaticamente após 4 segundos
  setTimeout(fecharCard, 4000);
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


const contagem = document.getElementById("contagem");

function atualizarContagem() {
  const agora = new Date();
  const anoAtual = agora.getFullYear();

  // Próximo aniversário em 15/12
  let proximoAniversario = new Date(`${anoAtual}-12-15T00:00:00`);

  // Se já passou este ano, pega o do próximo
  if (agora > proximoAniversario) {
    proximoAniversario = new Date(`${anoAtual + 1}-12-15T00:00:00`);
  }

  // Idade que Fefa vai fazer
  const nascimento = new Date("2008-12-15"); // altere aqui se quiser
  const idade = proximoAniversario.getFullYear() - nascimento.getFullYear();

  // Verifica se é hoje
  if (
    agora.getDate() === proximoAniversario.getDate() &&
    agora.getMonth() === proximoAniversario.getMonth()
  ) {
    contagem.innerHTML = `Hoje a Fefa faz ${idade}! 🎉`;
    return;
  }

  // Diferença total em milissegundos
  const diffMs = proximoAniversario - agora;

  const segundosTotais = Math.floor(diffMs / 1000);
  const dias = Math.floor(segundosTotais / (60 * 60 * 24));
  const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  const segundos = segundosTotais % 60;

  contagem.innerHTML = `fefa faz ${idade}:<br> ${dias} dia${dias !== 1 ? "s" : ""}, ${horas}h ${minutos}min ${segundos}s<br>`;
}

// Atualiza a cada segundo
setInterval(atualizarContagem, 1000);
atualizarContagem(); // chama já na primeira vez
