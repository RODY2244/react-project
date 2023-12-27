import { CATEGORY_ROUTE, DISCOUNT_ROUTE, ITEMS_ROUTE, ITEM_ROUTE, MAIN_ROUTE, NOTFOUND_ROUTE, SHOPBASKET_ROUTE, ALL_ITEMS_ROUTE } from "./utils/consts";
import MainPage from './pages/MainPage/MainPage'
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DiscountPage from './pages/DiscountPage/DiscountPage'
import ItemPage from "./pages/ItemPage/ItemPage"
import ItemsPage from "./pages/ItemsPage/ItemsPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ShopBasketPage from "./pages/ShopBasket/ShopBasket"
import AllProductPage from "./pages/AllItemsPage/AllItemsPage"
import AllItemsPage from "./pages/AllItemsPage/AllItemsPage";



export const routes = [
    {
        path: MAIN_ROUTE,
        element: <MainPage/>
    },
    {
        path: CATEGORY_ROUTE,
        element: <CategoryPage/>
    },
    {
        path: DISCOUNT_ROUTE,
        element: <DiscountPage/>
    },
    {
        path: ITEM_ROUTE + "/:id",
        element: <ItemPage/>
    },
    {
        path: ITEMS_ROUTE + '/:id',
        element: <ItemsPage/>
    },
    {
        path: NOTFOUND_ROUTE,
        element: <NotFoundPage/>
    },
    {
        path: SHOPBASKET_ROUTE,
        element: <ShopBasketPage/>
    },
    {
        path: ALL_ITEMS_ROUTE,
        element: <AllItemsPage/>
    }
]