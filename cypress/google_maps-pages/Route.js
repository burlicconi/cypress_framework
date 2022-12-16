import { NavigationPage } from "../../cypress/google_maps-pages/Navigation";

class Route{
        longestRoute () {
        
        //var routes=[];
        var maxRoute = -1
        var maxText = -1
        var maxRouteElement = null
        NavigationPage.allRoutes.each(($el)=>{

            var current = $el.text().replace(/\D/g, '')
            cy.log('current: '+current)
            if (maxRoute < current){
                cy.log(maxRoute)
                maxRoute = current
                maxText =  $el.text()
                maxRouteElement = $el
            }
            cy.wrap(maxRoute).as('maxRoute')
            cy.wrap(maxRouteElement).as('maxRouteElement')
            cy.wrap(maxText).as('maxText')
            //cy.log('maxText: ' + $el.text())
            //cy.wrap($el.text()).as('maxText')
            maxRouteElement.click()
        })
        //cy.log(maxRoute)
        //Ne vidim drugi nacin da izvucem najduzu rutu,a ne mogu da skontam ovde gde uporno bagujem pa mi
        //ne vraca maksimum iz niza
        
        //var maxRoute = routes[0];
        //cy.log(routes)
        
        // for ( let i = 0 ; i < routes.length ; i++ ) {
        //     cy.log('petlja')
        //     if(routes[i] >= maxRoute){
        //         maxRoute = routes[i]
        //     }
        // }
        //cy.log(maxRoute)
        //return maxRoute
    }



    chooseARoute ( currentLocation, destination ) {
        NavigationPage.dectinationInput.type(destination)
        NavigationPage.routeBtn.click()
        NavigationPage.currentLocationInput.type(currentLocation).type('{enter}')
        NavigationPage.carRoutesBtn.click()
    }

}

export const RoutePage = new Route();