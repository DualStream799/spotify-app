
it('starts with dark background', () => {
    cy.visit('http://localhost:3000/home#access_token=BQAh5jBE1jJxUbH563xoaPt0tyJp7LXOmkcKkuWRuvhvag0IPH2SxE_iNwXnMxmlcyTvvr8_mb9mcpgKQi7xxhm8Rnvjt0meNrxAVjuSYpeEbQqh64J3udsjJQzc4mW4oxZaBEtcbI9BQA1xC0oSlOuU_Vmg4Bf8xZvayxomcvmKdThj8VdpmJ35iFhM-fa0El8OmWw3R1yZpt2gRLeelKl8qBZbxj_KYMvWou3986QJx4t59rcRs-A&refresh_token=AQA_kaWtJM5sjava8H3dkjvhx3JbaBa9xPytdIISHceSwpHPOG5F8JkzTkICdY1E5blcEyeYkLC2Rs9PzvY_nrf78qUm2KusUEv4fhCzkuO9sV8_9DF63SAywwp4JWMbMJw')
    cy.get('body').should('have.css', 'background-color', 'rgb(26, 25, 25)')
  
    cy.get('.toggle-control input').should('be.checked');
    })
  