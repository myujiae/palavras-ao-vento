const promptCards = ["Use no máximo 10 palavras.", "Escreva uma história sem usar pronomes.", "Sua história deve ter exatamente 20 palavras.", "Use apenas frases curtas.", "Sua frase deve conter um trocadilho.", "Todas as palavras devem começar com a mesma letra.", "A história deve ter apenas três frases.", "Escreva uma história sem usar verbos.", "Inclua uma onomatopeia no início da frase.", "Comece cada frase com a mesma palavra.",
    "Escreva um poema.", "Escreva uma música curta ao invés de um texto.", "Escreva como se fosse um diário.", "Crie um diálogo entre dois personagens.", "Conte uma história apenas com diálogos.", "Escreva no formato de uma notícia.", "Faça uma propaganda de algo inusitado.", "Escreva instruções para algo que não faz sentido.", "Descreva uma cena como se fosse um documentário.", "Escreva no formato de uma carta.",
    "Comece com 'Era uma vez...'.", "A história deve ter um plot twist.", "A história deve ser um monólogo interno.", "A história deve ser uma metáfora para algo maior.", "Escreva um final alternativo para um conto famoso.", "A história deve ser contada de trás para frente.", "A história deve ter um final completamente inesperado.", "Crie uma teoria da conspiração absurda.", "Escreva sobre um evento do ponto de vista de um objeto.", "Narre um acontecimento como se fosse um esporte.",
    "Comece com 'E se...'.", "Comece com uma pergunta.", "A primeira frase deve ser um aviso misterioso.", "Comece com um diálogo impactante.", "Comece com alguém cometendo um erro.", "Comece com alguém ganhando um presente inesperado.", "Comece no meio de uma cena de ação.", "Comece com alguém fazendo uma promessa.", "Comece com uma frase que parece o final da história.", "Comece com a palavra 'Nunca'.",
    "A história acontece em um lugar onde a gravidade funciona de forma estranha.", "Toda a história acontece em uma viagem de metrô.", "A história se passa inteiramente dentro de um elevador.", "A história se passa durante uma grande tempestade.", "A história se passa em um universo alternativo.", "A história acontece em um sonho.", "A história deve ser contada em ordem não cronológica.", "Tudo acontece em um único dia.", "A história se passa em um lugar proibido.", "Algo na história acontece exatamente à meia-noite.",
    "Recrie um conto de fadas em um cenário moderno.", "Escreva uma fábula com uma moral no final.", "Inspire-se em um ditado popular.", "Misture dois gêneros de histórias completamente diferentes.", "Pegue uma história famosa e altere um detalhe essencial.", "Crie um personagem que só fala em rimas.", "Imagine uma criatura lendária que ninguém conhece.", "Faça uma versão alternativa de uma cena histórica.", "Descreva uma cena cotidiana como se fosse uma aventura épica.", "Reescreva uma cena de um filme famoso sob outra perspectiva.",
    "A história deve ser completamente absurda.", "Algo inesperado deve acontecer no final.", "Alguém tem uma habilidade inútil, mas muito específica.", "Algo minúsculo se torna a coisa mais importante do mundo.", "Um animal age como se fosse humano.", "Tudo na história deve ser um exagero.", "Pegue um clichê e inverta totalmente a expectativa.", "A história deve envolver um mal-entendido cômico.", "A história deve girar em torno de um trocadilho ruim.", "Algo aleatório deve se tornar um grande problema.",
    "A história deve terminar do mesmo jeito que começou.", "O protagonista não pode falar, apenas se expressar de outra forma.", "Todos os personagens acreditam em algo que claramente não é verdade.", "O protagonista tem um objetivo, mas se distrai no meio do caminho.", "Um detalhe insignificante no início se torna crucial no final.", "A história deve ter duas narrativas paralelas que se cruzam.", "A história deve ser contada por um narrador não confiável.", "A história deve ser sobre um encontro improvável.", "O protagonista faz uma escolha errada e precisa consertar.", "Algo pequeno deve ter uma grande consequência."
    ];
    
    const complementCards = ["Triste", "Feliz", "Melancólico", "Nostálgico", "Esperançoso", "Dramático", "Cômico", "Romântico", "Revoltante", "Assustador",
    "Futurista", "Medieval", "Épico", "Filosófico", "Poético", "Científico", "Psicodélico", "Experimental", "Surrealista", "Minimalista",
    "Distópico", "Utopista", "Fantasioso", "Apocalíptico", "Cibernético", "Parece um sonho", "Espacial", "Tecnológico", "Paranormal", "Gótico",
    "Agitado", "Atmosférico", "Intenso", "Misterioso", "Caótico", "Estranhamente calmo", "Frenético", "Obscuro", "Intrigante", "Reflexivo",
    "Pré-histórico", "Idade Média", "Renascimento", "Era vitoriana", "Anos 1920", "Guerra Fria", "Anos 1980", "Pós-apocalipse", "Num mundo subaquático", "Numa sociedade subterrânea",
    "Uma amizade improvável", "Um grande rival", "Uma relação complicada", "Um reencontro inesperado", "Uma parceria arriscada", "Um mentor e um aprendiz", "Um laço familiar inesperado", "Uma relação de amor e ódio", "Um pacto entre personagens",
    "Sociedade utópica", "Sociedade decadente", "Regras rígidas e opressoras", "Um mundo sem leis", "Tradições antigas ainda dominam", "Revolução e mudança", "Conflito entre gerações", "Um mundo governado por máquinas", "Cultura baseada em algo inusitado", "Tudo é decidido por sorte",
    "Um personagem muda drasticamente", "Algo pequeno se torna grandioso", "Uma tecnologia muda a sociedade", "Alguém descobre um talento oculto", "O protagonista perde algo importante", "O mundo não é mais o mesmo", "Uma descoberta muda tudo", "Uma tradição é quebrada", "Um evento inesperado altera o futuro", "Um sacrifício precisa ser feito"
    ];
    
    const elementCards = [
        { Objeto: "Relógio", Profissional: "Bombeiro", Ação: "Correr", Animal: "Tartaruga", Local: "Escola" },
        { Objeto: "Espada", Profissional: "Mecânico", Ação: "Saltar", Animal: "Corvo", Local: "Castelo" },
        { Objeto: "Bola", Profissional: "Professor", Ação: "Escrever", Animal: "Jacaré", Local: "Parque" },
        { Objeto: "Óculos", Profissional: "Pintor", Ação: "Misturar", Animal: "Elefante", Local: "Museu" },
        { Objeto: "Chave", Profissional: "Policial", Ação: "Prender", Animal: "Gato", Local: "Aeroporto" },
        { Objeto: "Computador", Profissional: "Programador", Ação: "Digitar", Animal: "Tubarao", Local: "Escritório" },
        { Objeto: "Livro", Profissional: "Bibliotecário", Ação: "Ler", Animal: "Cachorro", Local: "Biblioteca" },
        { Objeto: "Martelo", Profissional: "Carpinteiro", Ação: "Martelar", Animal: "Panda", Local: "Obra" },
        { Objeto: "Celular", Profissional: "Atendente", Ação: "Atender", Animal: "Papagaio", Local: "Call Center" },
        { Objeto: "Lâmpada", Profissional: "Eletricista", Ação: "Trocar", Animal: "Coelho", Local: "Casa" },
        { Objeto: "Câmera", Profissional: "Fotógrafo", Ação: "Fotografar", Animal: "Leão", Local: "Safari" },
        { Objeto: "Garrafa", Profissional: "Garçom", Ação: "Servir", Animal: "Peixe", Local: "Restaurante" },
        { Objeto: "Telefone", Profissional: "Recepcionista", Ação: "Responder", Animal: "Urso", Local: "Hotel" },
        { Objeto: "Violão", Profissional: "Músico", Ação: "Tocar", Animal: "Macaco", Local: "Praça" },
        { Objeto: "Bicicleta", Profissional: "Ciclista", Ação: "Pedalar", Animal: "Girafa", Local: "Parque" },
        { Objeto: "Tesoura", Profissional: "Cabeleireiro", Ação: "Cortar", Animal: "Pássaro", Local: "Salão de Beleza" },
        { Objeto: "Pincel", Profissional: "Artista", Ação: "Pintar", Animal: "Camaleão", Local: "Ateliê" },
        { Objeto: "Calculadora", Profissional: "Contador", Ação: "Calcular", Animal: "Tigre", Local: "Escritório" },
        { Objeto: "Microscópio", Profissional: "Cientista", Ação: "Examinar", Animal: "Formiga", Local: "Laboratório" },
        { Objeto: "Fita Métrica", Profissional: "Arquiteto", Ação: "Medir", Animal: "Elefante", Local: "Construção" },
        { Objeto: "Bússola", Profissional: "Explorador", Ação: "Navegar", Animal: "Águia", Local: "Floresta" },
        { Objeto: "Espelho", Profissional: "Esteticista", Ação: "Maquiar", Animal: "Pavão", Local: "Spa" },
        { Objeto: "Livro de Receitas", Profissional: "Chef", Ação: "Cozinhar", Animal: "Galo", Local: "Cozinha" },
        { Objeto: "Prancha de Surf", Profissional: "Surfista", Ação: "Surfar", Animal: "Golfinho", Local: "Praia" },
        { Objeto: "Termômetro", Profissional: "Médico", Ação: "Medir", Animal: "Coala", Local: "Hospital" },
        { Objeto: "Mapa", Profissional: "Guia Turístico", Ação: "Guiar", Animal: "Canguru", Local: "Cidade" },
        { Objeto: "Caderno", Profissional: "Escritor", Ação: "Escrever", Animal: "Coruja", Local: "Escritório" },
        { Objeto: "Régua", Profissional: "Engenheiro", Ação: "Projetar", Animal: "Castor", Local: "Obra" },
        { Objeto: "Bola de Cristal", Profissional: "Vidente", Ação: "Prever", Animal: "Coruja", Local: "Feira" },
        { Objeto: "Vassoura", Profissional: "Zelador", Ação: "Limpar", Animal: "Rato", Local: "Escola" },
        { Objeto: "Carrinho de Compras", Profissional: "Caixa", Ação: "Registrar", Animal: "Vaca", Local: "Supermercado" },
        { Objeto: "Mochila", Profissional: "Estudante", Ação: "Estudar", Animal: "Raposa", Local: "Universidade" },
        { Objeto: "Bandeira", Profissional: "Soldado", Ação: "Marchar", Animal: "Águia", Local: "Quartel" },
        { Objeto: "Piano", Profissional: "Pianista", Ação: "Tocar", Animal: "Gato", Local: "Teatro" },
        { Objeto: "Varinha", Profissional: "Mágico", Ação: "Performar", Animal: "Coelho", Local: "Circo" },
        { Objeto: "Raquete", Profissional: "Tenista", Ação: "Jogar", Animal: "Leopardo", Local: "Quadra" },
        { Objeto: "Prancheta", Profissional: "Arquiteto", Ação: "Desenhar", Animal: "Tartaruga", Local: "Escritório" },
        { Objeto: "Seringa", Profissional: "Enfermeiro", Ação: "Aplicar", Animal: "Pinguim", Local: "Clínica" },
        { Objeto: "Joystick", Profissional: "Gamer", Ação: "Jogar", Animal: "Lobo", Local: "Quarto" },
        { Objeto: "Microfone", Profissional: "Cantor", Ação: "Cantar", Animal: "Papagaio", Local: "Estúdio" },
        { Objeto: "Bússola", Profissional: "Navegador", Ação: "Navegar", Animal: "Gaivota", Local: "Navio" },
        { Objeto: "Câmera de Vídeo", Profissional: "Diretor", Ação: "Filmar", Animal: "Tigre", Local: "Set de Filmagem" },
        { Objeto: "Taco de Golfe", Profissional: "Golfista", Ação: "Jogar", Animal: "Cervo", Local: "Campo de Golfe" },
        { Objeto: "Chave de Fenda", Profissional: "Mecânico", Ação: "Consertar", Animal: "Cachorro", Local: "Garagem" }
      ];
    
    let usedPromptCards = new Set();
    let usedComplementCards = new Set();
    let usedElementCards = new Set();
    
    function generateRandomCard(cardsArray, usedCards) {
        let card;
        do {
            card = cardsArray[Math.floor(Math.random() * cardsArray.length)];
        } while (usedCards.has(card) && usedCards.size < cardsArray.length);
        usedCards.add(card);
        return card;
    }
    
    function generateInitialCards() {
        const promptList = document.getElementById('prompt-list');
        const complementList = document.getElementById('complement-list');
        const elementList = document.getElementById('element-list');
    
        for (let i = 0; i < 3; i++) {
            const promptCard = generateRandomCard(promptCards, usedPromptCards);
            const complementCard = generateRandomCard(complementCards, usedComplementCards);
            const elementCard = generateRandomCard(elementCards, usedElementCards);
    
            promptList.innerHTML += `<li>${promptCard} <button class="discard-btn" onclick="discardCard('prompt', this)">Descartar</button></li>`;
            complementList.innerHTML += `<li>${complementCard} <button class="discard-btn" onclick="discardCard('complement', this)">Descartar</button></li>`;
            elementList.innerHTML += `<li>${elementCard.Objeto}, ${elementCard.Profissional}, ${elementCard.Ação}, ${elementCard.Animal}, ${elementCard.Local} <button class="discard-btn" onclick="discardCard('element', this)">Descartar</button></li>`;
        }
    }
    
    function discardCard(type, button) {
        const listItem = button.parentElement;
        if (type === 'prompt') {
            const newCard = generateRandomCard(promptCards, usedPromptCards);
            listItem.innerHTML = `${newCard} <button class="discard-btn" onclick="discardCard('prompt', this)">Descartar</button>`;
        } else if (type === 'complement') {
            const newCard = generateRandomCard(complementCards, usedComplementCards);
            listItem.innerHTML = `${newCard} <button class="discard-btn" onclick="discardCard('complement', this)">Descartar</button>`;
        } else if (type === 'element') {
            const newCard = generateRandomCard(elementCards, usedElementCards);
            listItem.innerHTML = `${newCard.Objeto}, ${newCard.Profissional}, ${newCard.Ação}, ${newCard.Animal}, ${newCard.Local} <button class="discard-btn" onclick="discardCard('element', this)">Descartar</button>`;
        }
    }
    
    // Generate initial set of cards on page load
    generateInitialCards();