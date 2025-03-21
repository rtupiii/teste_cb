describe('Testes na página de login', () => {
  beforeEach(() => {
    cy.criarConta('teste@teste.com', 'Teste da Silva', 'senha_teste');
  });

  it('Login com sucesso', () => {
    cy.acessarConta('teste@teste.com', 'senha_teste')
  });

  it('Login sem sucesso por e-mail inválido', () => {
    cy.acessarConta('teste@@@@@teste.com', 'senha_teste')
    cy.get('.kOeYBn > .input__warging').contains('Formato inválido');
  })

  it('Login sem sucesso por senha incorreta', () => {
    cy.acessarConta('teste@teste.com', 'senha_errada')
    cy.get('#modalText').contains('Usuário ou senha inválido.');
  })
})