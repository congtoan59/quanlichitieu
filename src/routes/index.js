import Home from '../pages/Home/Home';
import Expense from '../pages/Expense/Expense';
import AccountLogin from '../pages/Account Login/Account';
import AccountRegister from '../pages/Account Register/Account';
import Revenue from '../pages/Revenue/Revenue';
import Statistics from '../pages/Statistics/Statistics';
import Wallet from '../pages/Wallet/Wallet';

// import AdminLayout from '../component/AdminLayout/AdminLayout';
import HomeAdmin from '../PageAdmin/HomeAdmin/HomeAdmin';

//Layouts account

//Public
const routerPulic = [
    { path: '/', element: Home },
    { path: '/revenue', element: Revenue },
    { path: '/expense', element: Expense },
    { path: '/wallet', element: Wallet },
    { path: '/statistics', element: Statistics },

    { path: '/login', element: AccountLogin, layout: null },
    { path: '/register', element: AccountRegister, layout: null },
];
//admin layout

const routerPrivate = [{ path: '/admin', element: HomeAdmin }];

export { routerPulic, routerPrivate };
