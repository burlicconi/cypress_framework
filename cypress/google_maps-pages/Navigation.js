class Navigation{

    get dectinationInput () {
        return cy.get('#searchboxinput')
    }

    get routeBtn () {
        return cy.get('.eYqqWd')
    }

    get currentLocationInput () {
        return cy.get('#sb_ifc50 > .tactile-searchbox-input')
    }

    get carRoutesBtn () {
        return cy.get('[data-travel_mode="0"] > button > .OzmNAc')
    }

    get allRoutes () {
        return cy.xpath("//*[contains(@class,'tUEI8e')]/div");
    }

    get choosenRouteKm () {
        return cy.xpath("//*[contains(@class,'hPzYFf')]/span")
    }

    get ourRoute () {
        return cy.get('#section-directions-trip-1 > .MespJc');
    }

}

export const NavigationPage = new Navigation();