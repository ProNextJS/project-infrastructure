describe("Home page test", () => {
  it("Visits the home page and looks for bulbasaur", () => {
    cy.visit("/");
    cy.contains("bulbasaur");
  });
});
