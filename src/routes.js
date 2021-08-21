import { ADMIN_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"
import Admin from './pages/admin'
import Auth from './pages/auth'
import Order from './pages/order'
import OrderPage from './pages/orderPage'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ORDER_ROUTE,
        Component: Order
    },
    {
        path: ORDER_ROUTE + '/:id',
        Component: OrderPage
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]