describe("When on landing page", () => {
  // configured Cypress to support TypeScript tests
  it("should handle typescript based tests", () => {
    const helperMethod = (urlToTest: string) => {
      cy.visit(urlToTest);
      cy.get("[data-testid=strap-line-text]").should("be.visible");
    };

    helperMethod("\\");
  });

  it("should be able to see strap line text", () => {
    cy.visit("/");
    cy.get("[data-testid=strap-line-text]").should("be.visible");
  });
});
