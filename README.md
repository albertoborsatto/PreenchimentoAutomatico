# Explorando fetch API Via CEP

Um programa muito simples, consistindo numa página que recebe dados de um usuário. Quando o usuário preencher seu CEP e ir para o próximo dado a ser preenchido, o programa recebe os dados do CEP, faz um fetch para o endpoint da API do Via Cep, passando o cep recebido como parâmetro. Após receber os dados de resposta da API, uma função percorre o JSON recebido e, caso o dado recebido conste nos pedidos do formulário ele já preenche automaticamente o espaço para o usuário.