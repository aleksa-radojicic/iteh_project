import Dashboard from "../components/admin/Dashboard";
import Profile from "../components/admin/Profile";

const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
    // { path: '/admin/add-category', exact: true, name: 'Category', component: Category },
    // { path: '/admin/view-category', exact: true, name: 'ViewCategory', component: ViewCategory },
    // { path: '/admin/edit-category/:id', exact: true, name: 'EditCategory', component: EditCategory },
    // { path: '/admin/add-product', exact: true, name: 'AddProduct', component: AddProduct },
    // { path: '/admin/view-product', exact: true, name: 'ViewProduct', component: ViewProduct },
    // { path: '/admin/edit-product/:id', exact: true, name: 'EditProduct', component: EditProduct },
    // { path: '/admin/profile', exact: true, name: 'Profile', component: Profile },
    // { path: '/admin/orders', exact: true, name: 'Order', component: Order },
];

export default routes;