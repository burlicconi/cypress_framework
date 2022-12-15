import { NavigationPage } from "../../cypress/google_maps-pages/Navigation";

class Route{
        longestRoute () {
        
        let routes=[];
        
        NavigationPage.allRoutes.each(($el)=>{

            routes.push(
                $el.text()
                .replace(/\D/g, ''))
        })
        cy.log(routes)
        
        //Ne vidim drugi nacin da izvucem najduzu rutu,a ne mogu da skontam ovde gde uporno bagujem pa mi
        //ne vraca maksimum iz niza
        
        let maxRoute = routes[0];
        for ( let i = 0 ; i < routes.length ; i++ ) {
            if(routes[i] >= maxRoute){
                maxRoute = routes[i]
            }
        }
        return maxRoute
    }

    chooseARoute ( currentLocation, destination ) {
        NavigationPage.dectinationInput.type(destination)
        NavigationPage.routeBtn.click()
        NavigationPage.currentLocationInput.type(currentLocation).type('{enter}')
        NavigationPage.carRoutesBtn.click()
    }

}

export const RoutePage = new Route();