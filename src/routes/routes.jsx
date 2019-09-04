import Home from './../views/home';
import Restaurants from './../views/restaurant';
import RestaurantMenu from './../views/menu';

const appRoutes = [
    {
        path: "/restaurants/city/:id",
        title: "Restaurants",
        component: Restaurants
    },
    {
        path: "/restaurants/:id",
        title: "Restaurant Menu",
        component: RestaurantMenu
    },
    {
        path: "/",
        title: "Home",
        component: Home
    },
    {
        redirect: true,
        path: "*",
        to: "/",
        component: Home
    }
];

export default appRoutes
