import {RoutePage} from "../../cypress/google_maps-pages/Route"
import {NavigationPage} from "../../cypress/google_maps-pages/Navigation"

describe('Google maps', () => {
    
    it('Longest route', () => {
        cy.visit("https://www.google.com/maps/@44.8069632,20.4275712,12z?hl=sr")
        
        RoutePage.chooseARoute("Beograd", "Amsterdam")

        let longestRoute = RoutePage.longestRoute();
        cy.get('@maxRoute').then(maxRoute => {
                cy.log('Longest route is:' + maxRoute)
                
            })


        //NavigationPage.ourRoute.click().type('{enter}')
        
        NavigationPage.choosenRouteKm.should('contain.text', `${longestRoute}`)
    });
});