import Account from "./components/account/Account";
import Votes from "./components/account/Votes";
import Send from "./components/transfer/Send";
import AddWallet from "./components/wallet/AddWallet";
import BuyToken from "./components/tokens/BuyToken";
import CreateToken from "./components/tokens/CreateToken";
import Note from "./components/Notifications/Note";


export const routes = [

    {
        path: "/send",
        label: "send",
        component: Send,
        icon: "fa fa-paper-plane mr-2",
        showLoggedIn: true
    },


    {
        path: "/AddWallet",
        showInMenu: false,
        component: AddWallet,
    },
    {
        path: "/CreateToken",
        showInMenu: false,
        component: CreateToken,
    },

    {
        path: "/BuyToken",
        showInMenu: false,
        component: BuyToken,
    },

    {
        path: "/account/votes",
        showInMenu: false,
        component: Votes,
    },

    {
        path: "/account",
        showInMenu: false,
        component: Account,
    },
    {
        path: "/",
        label: "TronWalletEx",
        showInMenu: false,
        component: Note,
    },

];

