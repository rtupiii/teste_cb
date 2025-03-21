Cypress.Commands.add('criarConta', (username, name, password) => {
    cy.visit('http://localhost:3000');
    cy.contains('Registrar').click()
    cy.get(':nth-child(2) > .input__default').type(username, { force: true });
    cy.get(':nth-child(3) > .input__default').type(name, { force: true });
    
    if (password === 'senha_teste') {
      cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(password, { force: true });
      cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(password, { force: true });
      cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    }
    else {
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(password, { force: true });
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha_incorreta', { force: true });
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true });
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if  (!regexEmail.test(username)) {
      cy.get('.kOeYBn > .input__warging').contains('Formato inválido');
    }
    else if (password !== 'senha_teste') {
      cy.get('.styles__ContainerInformations-sc-8zteav-3').contains('As senhas não são iguais.');
    }
    else  
      cy.get('#btnCloseModal').click()
  });

Cypress.Commands.add('acessarConta', (username, password) => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(username);
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(password);
    cy.contains('Acessar').click();
});