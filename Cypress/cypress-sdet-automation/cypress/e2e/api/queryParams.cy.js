/// <reference types="cypress"/>

describe('API Testing -Query Param', () => {

    const queryParam = {page: 2};

    it('Passing Query Params', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qp: queryParam
        })
        .then((response) => {
            cy.log(response.body.page);
            expect(response.status).equal(200);          
            expect(response.body.page).to.eq(1);            
            expect(response.body.data).has.length(6);
            expect(response.body.data[0]).has.property('id', 1);
            expect(response.body.data[0]).has.property('first_name', 'George')
        })
    })

})