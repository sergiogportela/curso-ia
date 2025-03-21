// Inicializar as animações da biblioteca AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa as animações
    AOS.init({
        duration: 800,          // Duração das animações
        easing: 'ease-out',     // Tipo de easing
        once: false,            // Animações só ocorrem uma vez ou sempre que rolar a página
        mirror: true,           // Se os elementos devem animar ao sair do viewport
        anchorPlacement: 'top-bottom' // Posicionamento da âncora
    });

    // Referências aos elementos do DOM
    const inscricaoBtn = document.getElementById('inscricao-btn');
    const ementaBtn = document.getElementById('ementa-btn');
    const inscricaoModal = document.getElementById('inscricao-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const inscricaoForm = document.getElementById('inscricao-form');
    
    // Função para abrir o modal de inscrição
    function openInscricaoModal() {
        inscricaoModal.style.display = 'block';
        // Pequeno atraso para garantir que a animação do AOS funcione
        setTimeout(() => {
            AOS.refresh();
        }, 10);
    }
    
    // Função para fechar o modal de inscrição
    function closeInscricaoModal() {
        inscricaoModal.style.display = 'none';
    }
    
    // Função para redirecionar para a página da ementa
    function redirectToEmenta() {
        // Quando tivermos a página de ementa pronta, redirecionar para lá
        // Por enquanto, vamos redirecionar para a página 2 quando criada
        window.location.href = 'ementa.html';
    }
    
    // Função para lidar com o envio do formulário
    function handleFormSubmit(event) {
        event.preventDefault();
        
        // Capturar os dados do formulário
        const nome = document.getElementById('nome').value;
        const whatsapp = document.getElementById('whatsapp').value;
        
        // Aqui você pode implementar a lógica para enviar os dados para um backend
        // Por enquanto, vamos apenas mostrar uma mensagem
        alert(`Obrigado ${nome}! Sua inscrição foi recebida com sucesso. Entraremos em contato pelo WhatsApp ${whatsapp} em breve.`);
        
        // Resetar o formulário e fechar o modal
        inscricaoForm.reset();
        closeInscricaoModal();
    }
    
    // Adicionar ouvintes de eventos
    if (inscricaoBtn) {
        inscricaoBtn.addEventListener('click', openInscricaoModal);
    }
    
    if (ementaBtn) {
        ementaBtn.addEventListener('click', redirectToEmenta);
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeInscricaoModal);
    }
    
    if (inscricaoForm) {
        inscricaoForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Fechar o modal quando clicar fora dele
    window.addEventListener('click', function(event) {
        if (event.target === inscricaoModal) {
            closeInscricaoModal();
        }
    });
    
    // Efeito de "digitação" para o título
    const titleElement = document.querySelector('h1');
    if (titleElement) {
        const title = titleElement.textContent;
        titleElement.textContent = '';
        
        let i = 0;
        // Função para digitar o título letra por letra
        function typeWriter() {
            if (i < title.length) {
                titleElement.textContent += title.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Velocidade da digitação
            }
        }
        
        // Iniciar o efeito após um pequeno atraso
        setTimeout(typeWriter, 500);
    }
    
    // Adicionar efeito de parallax ao rolar a página
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // Efeito parallax para as estrelas
        document.getElementById('stars').style.transform = `translateY(${scrollPosition * 0.1}px)`;
        document.getElementById('stars2').style.transform = `translateY(${scrollPosition * 0.2}px)`;
        document.getElementById('stars3').style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
}); 