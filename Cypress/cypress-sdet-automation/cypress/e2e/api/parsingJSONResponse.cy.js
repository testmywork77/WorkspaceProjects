describe('Parsing JSON Responce', ()=> {
    
    it('Parsing simple JSON response', ()=> {

        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }). then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body[0].id).equal(1)
            expect(response.body[0].title).to.equal("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
            expect(response.body[0].rating.rate).to.equal(3.9)

            expect(response.body[19].id).to.equal(20);
            expect(response.body[19].title).to.equal("DANVOUY Womens T Shirt Casual Cotton Short")
        })

    })

    it('Parsing complex JSON response', ()=> {

        let totalprice=0;
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products',
            qs:{limit:5}
        }).then((response) => {
            expect(response.status).to.equal(200)
            response.body.forEach(element => {
                totalprice = totalprice + element.price;
            });
            expect(totalprice).to.equal(899.23); // limit 5
        })

    })
})