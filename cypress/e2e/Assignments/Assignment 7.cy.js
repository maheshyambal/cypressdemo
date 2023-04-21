describe('Ecommerce Demo Appplication',()=>{
it('Register New user',()=>{
    cy.visit('https://automationteststore.com/')
    cy.get('#customernav').click()
    cy.get('.btn.btn-orange.pull-right').eq(0).click()
    cy.get('#AccountFrm_firstname').type('Virat11')
    cy.get('#AccountFrm_lastname').type('Kohli11')
    cy.get('#AccountFrm_email').type('viratkohli@demo.com')
    cy.get('#AccountFrm_telephone').type('9970603978')
    cy.get('#AccountFrm_company').type('Josh Software')
    cy.get('#AccountFrm_address_1').type('Amar Tech Park')
    cy.get('#AccountFrm_address_2').type('Balewadi')
    cy.get('#AccountFrm_city').type('Pune')
   // cy.get('#AccountFrm_zone_id').select('Central',{force:true})
    //cy.get('#AccountFrm_zone_id').select()
    cy.get('#AccountFrm_postcode').type('411008')
    cy.get('[name="country_id"]').select('Australia')
    cy.get('#AccountFrm_loginname').type('JoshAdmin')
    cy.get('#AccountFrm_password').type('admin@123')
    cy.get('#AccountFrm_confirm').type('admin@123')
    cy.get('#AccountFrm_newsletter1').check()
    cy.get('#AccountFrm_agree').check()
    //cy.get('.fa.fa-check').click()
})

})