// Inicializa a biblioteca de animações AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa a biblioteca AOS para animações ao rolar
    AOS.init({
        duration: 800, // duração das animações
        once: true, // animações acontecem apenas uma vez
        offset: 100 // offset (em px) do ponto de disparo
    });
    
    // Carrega o conteúdo do arquivo markdown
    fetchMarkdownContent();
    
    // Adiciona efeito de estrelas ao fundo
    createStarryBackground();
    
    // Configuração dos eventos dos botões
    setupButtonEvents();
});

// Função para buscar e renderizar o conteúdo markdown
function fetchMarkdownContent() {
    // Fetch para buscar o arquivo de conteúdo
    fetch('ementa/01_Resumo e objetivos.md')
        .then(response => {
            // Verifica se a resposta é válida
            if (!response.ok) {
                throw new Error('Não foi possível carregar o conteúdo');
            }
            return response.text();
        })
        .then(markdown => {
            // Converte o markdown para HTML usando a biblioteca marked
            const htmlContent = marked.parse(markdown);
            
            // Insere o HTML no elemento de conteúdo
            document.getElementById('course-content').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Erro ao carregar conteúdo:', error);
            document.getElementById('course-content').innerHTML = 
                '<p>Houve um erro ao carregar o conteúdo. Por favor, tente novamente mais tarde.</p>';
        });
}

// Função para configurar os eventos dos botões
function setupButtonEvents() {
    // Referências aos elementos DOM
    const subscribeBtn = document.getElementById('subscribe-btn');
    const curriculumBtn = document.getElementById('curriculum-btn');
    const modal = document.getElementById('subscription-modal');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('subscription-form');
    
    // Evento para abrir o modal de inscrição
    subscribeBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    // Evento para fechar o modal ao clicar no X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Evento para fechar o modal ao clicar fora dele
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Evento para o botão de ementa e cronograma
    curriculumBtn.addEventListener('click', function() {
        // Por enquanto, vamos apenas alertar que estará disponível em breve
        alert('A ementa e o cronograma completos estarão disponíveis em breve!');
    });
    
    // Evento para o envio do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário
        
        // Pega os valores dos campos
        const name = document.getElementById('name').value;
        const whatsapp = document.getElementById('whatsapp').value;
        
        // Aqui você pode adicionar código para enviar os dados para algum backend
        console.log('Dados de inscrição:', { name, whatsapp });
        
        // Feedback para o usuário
        alert(`Obrigado ${name}! Sua inscrição foi recebida. Entraremos em contato pelo WhatsApp.`);
        
        // Fecha o modal e limpa o formulário
        modal.style.display = 'none';
        form.reset();
    });
}

// Função para criar o efeito de estrelas no fundo
function createStarryBackground() {
    // Cria um elemento canvas para as estrelas
    const starsCanvas = document.createElement('canvas');
    starsCanvas.classList.add('stars');
    document.body.appendChild(starsCanvas);
    
    const ctx = starsCanvas.getContext('2d');
    
    // Configura o tamanho do canvas para ocupar toda a tela
    function setCanvasSize() {
        starsCanvas.width = window.innerWidth;
        starsCanvas.height = window.innerHeight;
    }
    
    // Chama inicialmente e adiciona listener para redimensionamento
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Array para armazenar as estrelas
    const stars = [];
    
    // Cria estrelas com propriedades aleatórias
    function createStars() {
        // Número de estrelas baseado no tamanho da tela
        const starCount = Math.floor((starsCanvas.width * starsCanvas.height) / 1000);
        
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * starsCanvas.width,
                y: Math.random() * starsCanvas.height,
                radius: Math.random() * 1.5,
                opacity: Math.random(),
                speed: Math.random() * 0.05
            });
        }
    }
    
    // Desenha e anima as estrelas
    function animateStars() {
        // Limpa o canvas
        ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
        
        // Desenha cada estrela
        stars.forEach(star => {
            // Atualiza opacidade para criar efeito de brilho
            star.opacity = Math.sin(Date.now() * star.speed) * 0.5 + 0.5;
            
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
            ctx.fill();
        });
        
        // Continua a animação
        requestAnimationFrame(animateStars);
    }
    
    // Inicia a criação e animação de estrelas
    createStars();
    animateStars();
} 