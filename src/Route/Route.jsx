import { createBrowserRouter } from "react-router-dom";
import Overview from "../Pages/Overview/Overview";
import Root from "../Layout/Root";
import Trans from "../Pages/Trans/Trans";
import SendMoney from "../UsersRoutes/SendMoney";
import CashOut from "../UsersRoutes/CashOut";
import CashIn from "../UsersRoutes/CashIn";



const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>Error...</h1>,
        children: [
            {
                path: "/",
                element: <Overview></Overview>,
            },
            {
                path: "/trans",
                element: <Trans></Trans>,
            },
            {
                path: "/send-money",
                element: <SendMoney></SendMoney>,
            },
            {
                path: "/cash-out",
                element: <CashOut></CashOut>,
            },
            {
                path: "/cash-in",
                element: <CashIn></CashIn>,
            },
        ],
    },
]);

export default Route;