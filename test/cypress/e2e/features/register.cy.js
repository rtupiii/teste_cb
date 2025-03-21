describe('Testes na página de registro [@cadastro]', () => {
  
  it('Registro com sucesso', () => {
    cy.criarConta('teste@teste.com', 'Teste da Silva', 'senha_teste');
  });

  it('Registro inválido por e-mail', () => {
    cy.criarConta('teste@@@teste.com', 'Teste da Silva', 'senha_teste');
  });

  it('Registro inválido por nome incorreto', () => {
    cy.criarConta('teste@teste.com', 'TESSSSSSSSSSSSSSSSSSSTEINVAAAAAAAAAALIDO', 'senha_teste');
    cy.log(`⚠️ ATENÇÃO: Este teste é um falso positivo.
      Motivo: O campo "Nome" aceita nomes fora do padrão e como não sei a mensagem de erro padrão que deveria acontecer, não há como criar um condicional dentro do commands.js.
      Ação necessária: Verifique manualmente se o comportamento está correto.
    `);
  });

  it('Registro inválido por senhas divergentes', () => {
    cy.criarConta('teste@teste.com', 'Teste da Silva', 'senha_errada');
  });

})