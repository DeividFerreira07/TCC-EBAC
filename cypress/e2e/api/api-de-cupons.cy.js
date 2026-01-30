/// <reference types="cypress" />

let token;
beforeEach(() => {
  cy.geraToken("admin@biblioteca.com", "admin123").then((tkn) => {
    token = tkn;
  });
});

describe("Deve listar cupom", () => {
  it("Deve listar cupom com sucesso", () => {
    cy.api({
      method: "GET",
      url: "coupons",
      headers: { Authorization: token },
    }).should((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

describe("Deve cadastrar cupom", () => {
  it("Deve cadastrar um novo cupom com sucesso", () => {
    cy.api({
      method: "POST",
      url: "cupons",
      headers: { Authorization: token },
      body: {
        codigo: "NOVO10",
        valor: 10,
      },
    }).should((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
