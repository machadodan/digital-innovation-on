# digital-innovation-on
Solução de otimização de comunição entre e clientes e Carrefour
Solução de comunicação entre clientes e Carrefour A solução contempla a comunicação entre clientes e o Carrefour de forma otimizada. 
Para uma solução foi usada o Node.Js; API do telegrama; DialogFlow; youtube DataAPI Por meio de um agente virtual criado no Telegram o nosso - Innovation Client Carrefour, ele interage de forma automática com o cliente Carrefour. 
Para isso, foi criada uma base de conhecimento no Dialogflow e com base na pergunta do cliente ou agente virtual retorna uma resposta. uma solução tem os seguintes arquivos: 
dialogflow - onde esta configurada parte das intenções ou seja com base na pergunta retorna respostas.
index.js contém o token do do telegrama; chamada e retorno de função; 
 youtube.js - É uma parte da configuração de retorno dos vídeos; por meio de prometer que fica ouvindo quando finalizar e ocorrer erro de erro msg 
yt-config-Json - contem uma API de dados-chave do youtube que chama no youtube.js 
package-Json -contendo as dependências do projeto: dialogflow, telegram, youtube- 
Informo que foi desativado como chave de configuração do Telegram; youtube por questão de segurança uma vez que o projeto é público. 
Na base de conhecimento foi criada uma entidade chamada: Carrinho foram geradas intenções com base no conhecimento. 
o cliente inicia uma conversa com qualquer coisa que o agente analisa e retorna com base na pergunta. Se o cliente fala: 
cliente : oi 
Agente: Olá, que pode ajudar 
Cliente: deseja casa, carro ou sabe o kkkkk 
Agente: Infelizmente, não é possível ajudar a recuperar uma variedade de alimentos ..... experimente pesquisar por palavras-chave: Protudo; Alimentos; Padaria;
Cliente: churrasco
Agente: direciona o cliente para sessão dicas do site onde ele define a quantidade de pessoas para saber quanto vai comprar de alimentos.
O projeto é simples mais pode ser melhorado.
