describe('Testes da página de transferência [@transferencia]', () => {
  
  beforeEach(() => {
    cy.criarConta('teste@teste.com', 'Teste da Silva', 'senha_teste');
    cy.acessarConta('teste@teste.com', 'senha_teste');
  });

  it('Transferencia mal sucedida para conta inexistente', () => {
    cy.get('#btn-TRANSFERÊNCIA').click();
    cy.get(':nth-child(1) > .input__default').type('123');
    cy.get('.account__data > :nth-child(2) > .input__default').type('1');
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('1');
    cy.get(':nth-child(3) > .input__default').type('Transferência para conta inexistente');
    cy.get('.style__ContainerButton-sc-1wsixal-0').click();
    cy.get('#modalText').contains('Conta inválida ou inexistente');
  });
  
})
