import { userRoles } from "src/environments/environment";

export const routerLinksToRoles: RouterLinkToRole[] = [
    {
        routeDisplayName: 'דף הבית',
        routeName: 'homepage',
        roles: [userRoles.lomed, userRoles.metaknen, userRoles.meshabetz, userRoles.wideManager]
    },
    {
        routeDisplayName: 'פיד',
        routeName: 'feed',
        roles: [userRoles.lomed, userRoles.metaknen, userRoles.meshabetz]
    },
    {
        routeDisplayName: 'ספרייה',
        routeName: 'library',
        roles: [userRoles.lomed, userRoles.metaknen, userRoles.meshabetz, userRoles.wideManager]
    }
]

export type RouterLinkToRole = {
    routeDisplayName: string;
    routeName: string;
    roles: string[];
}