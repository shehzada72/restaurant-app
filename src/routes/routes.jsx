import Home from './../views/home';
import Restaurants from './../views/restaurant';

const appRoutes = [
    {
        path: "/restaurants/city/:id",
        title: "Restaurants",
        component: Restaurants
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
