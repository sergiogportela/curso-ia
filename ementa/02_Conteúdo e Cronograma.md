# 0. Base conceitual
### _As 3 etapas que constroem de todo LLM_

1. Treino (construir conhecimento - entender como as palavras se relacionam)
	- Montagem da rede neural: um cérebro vazio, porém pronto (terá poucas alterações após este processo) 
	- Que informação está aqui? 
	- Como foi tratada?
		- ==Mostrar print de modelo base llama==
		- Exemplo: https://chatgpt.com/share/67d44d13-1004-8011-aa65-351a2fae0a54
2. Pós-Treino (alinhar conhecimento a formato de assistente e aprender pela experiencia resolvendo problemas reais, melhorando a cada tentativa)
	- Alinhamento (Fine-tuning) (ajusta camadas finais da rede)
		- Expor conversas de assistente X usuário ==mostrar exemplos==
	- Aprendizagem por reforço (RL) (ajusta todas as camadas da rede)
		- Como?
			- Milhões de tentativas respondendo perguntas para as quais nós conseguimos dar notas/avaliar as suas respostas de forma clara. 
			- Os "neurônios" vão sendo ajustados a "forma" que tinham quando as notas foram mais altas
		- Diferentes tipos:
			- RLHF ==mostrar exemplos==
			- RL para cadeia de pensamento ==mostrar exemplos==
3. Inferência em janela limitada (responder suas perguntas/ajudar a resolver os seus problemas)
	- É a soma do:
		- 1. Prompt de sistema
			- ==Mostrar exemplos anthropic==
			- _Pode incluir memórias sobre janelas passadas (ChatGPT)_
		- 2. Todas as palavras que você escreveu na conversa atual
		- 3. Todas as palavras que o modelo previu na conversa atual
	- Reseta sempre que você abre uma nova conversa
	- O modelo "escreve" prevendo a palavra mais provável de ocorrer após todas as palavras que já estão na sua janela de contexto/inferência
		- Qual a palavra mais provável?
			- A que ocorreu de forma mais ==comum== no **treino**
			- A que ocorreu de forma mais ==comum== no **alinhamento**
			- A que quando utilizada, ajudou o modelo a executar as tarefas de **aprendizagem por reforço** com mais sucesso.
		- Dado que ==cada previsão é feita em cima de uma previsão anterior==, a precisão melhora com:
			- Janelas mais curtas
			- Janelas mais organizadas
	- Pode haver uso de ferramentas como...
		- Busca na internet
		- Leitura de arquivos (excel, csv, pdf, txt...)
		- Controle de um computador (Manus)
		- Controle do seu navegador de internet (Operator)

- referências: 
	- Deep Dive into LLMs like ChatGPT: https://www.youtube.com/watch?v=7xTGNNLPyMI
	- Arquitetura Rede Neural: https://bbycroft.net/llm
# 1. Gestão do Contexto

- Preparação de Markdowns com boa hierarquia 
	- Vão sendo atualizados a medida que nossa compreensão do problema melhora
		- ==Realizar exemplos mais simples nessa parte==
- Formatos para expor dados
	- tabelas/planilhas
		- Exponha exemplos em json - Copie e cole direto do excel: https://shancarter.github.io/mr-data-converter/
		- Formate os ranges como tabela para obter melhor ajuda nas fórmulas
		- Defina o id-único de cada tabela
		- Defina o que existe em cada coluna
- Gestão do tamanho do contexto (janela)
- Ferramentas que ajudam
	- Obsidian
	- Projetos do ChatGPT
	- Cursor (programação)
# 2. O modelo certo para cada tarefa

- Tabela dos principais modelos
	- Modelos Comparados
		- OpenAI GPT 4o
		- OpenAI o1 - mini
		- OpenAI o1
		- DeeepSeek R1
	- Critérios de comparação
		- Raciocínio
		- Contexto
		- Risco de alucinação
		- Limites de uso (semanal/diário)
		- Inputs que aceita
			- Texto
			- Foto
			- Tabela
			- Modo de voz avançado
		- Capacidades que possui
			- Busca online
			- Canvas
			- Execução de código
- Mitigando risco de alucinação
	- Com raciocínio
	- Com busca online e check nas fontes
- Mudança entre modelos para em uma mesma tarefa
	- Dentro do próprio chatGPT 
	- Entre ChatGPT e DeepSeek
- ==Text to speech do ChatGPT==
# 3. Prática (feita com cada setor separadamente)

1. Baixar obsidian no celular e colocar vault em pasta na núvem
2. Baixar obsidian no computador e abrir pasta
3. Acessar conta ChatGPT premium ou PRO
