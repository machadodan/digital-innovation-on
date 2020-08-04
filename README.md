# digital-innovation-on
                                     A solução tem o objetivo de otimizar a comunicação entre clientes e o Carrefour. 
Objetivo: Estabelecer a comunicação pelo aplicativo de mensageria onde o agente virtual " Innovation Client Carrefour", interage de forma automática com o cliente Carrefour, através de perguntas e respostas.
Tecnologias: 
	- Node.Js; 
	- API do telegrama;
	- DialogFlow; 
	- youtube DataAPI 
 :Dialogflow para base de conhecimento e treinamento do agente virtual; 
 : criada uma entidade chamada Carrinho(com a base de conhecimento para solução) e criadas intenções.
 :Telegram aplicativo para troca de mensagens; 
 :youtube DataAPI retorno de vídeos
Obs: As chave de configuração do Telegram; youtube por questão de segurança uma vez que o projeto é público foram retiradas
Modelo: 
	o cliente inicia uma conversa com qualquer coisa que o agente analisa e retorna uma resposta com base na pergunta.
	Se a pergunta for satisfatório o agente direciona o cliente
	Se a pergunta não for satisfatória o agente retorna a mensagem auxiliando a pesquisar por palavras-chave.
	Se o cliente solicitar um vídeo sobre o produto sera retornado um vídeo
Impedimentos:
	A implementação é simples porém funcional, mas o desafio maior foi configurar e integrar varias tecnologias diferentes.
