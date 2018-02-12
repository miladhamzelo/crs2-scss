import {ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy} from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {


    handlers: { [key: string]: DetachedRouteHandle } = {};

    /** Determines if this route (and its subtree) should be detached to be reused later */
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        if (route.data && route.data.reuse) {
            return true;
        }
        return false;
    }

    /** Stores the detached route */
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.handlers[this.getKey(route)] = handle;
    }

    /** Determines if this route (and its subtree) should be reattached */
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.handlers[this.getKey(route)];
    }

    /** Retrieves the previously stored route */
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) {
            return null;
        }
        if (route.routeConfig.loadChildren) {
            return null;
        }
        return this.handlers[this.getKey(route)];
    }

    /** Determines if a route should be reused */
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return curr.routeConfig === future.routeConfig;
    }

    private getKey(route: ActivatedRouteSnapshot) {
        // console.log(route);
        let key: string;
        if (route.data) {
            key = route.data['title'];
        } else if (route.firstChild.data) {
            key = route.firstChild.data['title'];
        }
        return key;
    }

}
