import {createRouter, createWebHistory} from 'vue-router'
import ProductListPage from '../pages/product/ProductListPage.vue'
import CreateProductPage from '../pages/product/CreateProductPage.vue'
import EditProductPage from '../pages/product/EditProductPage.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import CartPage from '../pages/cart/CartPage.vue'
import Posts from '../pages/post/Posts.vue'
import AddPost from "../pages/post/AddPost.vue"
import Friends from '../pages/friend/FriendsPage.vue'
import Chats from '../pages/chat/Chats.vue'
import Dialogs from "../pages/chat/Dialogs.vue";
import Profile from '../pages/profile/OldProfile.vue'
import ProfileEdit from '../pages/profile/OldProfileEdit.vue'
import CategoryPage from '../pages/category/CategoryPage.vue'

import OrderListPage from '../pages/order/OrderListPage.vue'
import EditOrdersPage from '../pages/order/EditOrderPage.vue'
import MyOrders from '../pages/order/MyOrders.vue'
import RequestPage from "../pages/request/RequestPage.vue";
import UserProfile from '@/pages/profile/UserProfile.vue';

import Field from '@/components/profile/Field.vue';
import PetForm from '@/components/pet/PetForm.vue';
import UserForm from '@/components/user/UserForm.vue';
import AddPetBtn from '@/components/base/AddPetBtn.vue';
import AddAppointment from '@/components/appointment/AddAppointment.vue';
import Calendars from '@/components/appointment/Calendars.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "MainPage",
            component: Posts,
        },
        {
            path: "/products",
            name: "Products",
            component: ProductListPage,
        },
        {
            path: "/products/create",
            name: "CreateProduct",
            component: CreateProductPage,
        },
        {
            path: "/products/edit/:productId",
            name: "EditProduct",
            component: EditProductPage,
        },

        {
            path: "/orders",
            name: "Orders",
            component: OrderListPage,
        },
        {
            path: "/orders/edit/:orderId",
            name: "EditOrder",
            component: EditOrdersPage,
        },

        {
            path: "/register",
            name: "Register",
            component: RegisterPage,
        },
        {
            path: "/login",
            name: "Login",
            component: LoginPage,
        },

        {
            path: "/my_order",
            name: "MyOrders",
            component: MyOrders,
        },

        {
            path: "/cart",
            name: "Cart",
            component: CartPage,
        },
        {
            path: "/posts",
            name: "Posts",
            component: Posts,
        },
        {
            path: "/addpost",
            name: "AddPost",
            component: AddPost,
        },
        {
            path: "/friends",
            name: "Friends",
            component: Friends,
        },
        {
            path: "/chats",
            name: "Chats",
            component: Chats,
        },
        {
            path: "/chats/:chatId",
            name: "Dialogs",
            component: Dialogs,
        },
        {
            path: "/profile",
            name: "Profile",
            component: Profile,
        },
        {
            path: "/profile/edit",
            name: "ProfileEdit",
            component: ProfileEdit,
        },
        {
            path: "/categories",
            name: "CategoryPage",
            component: CategoryPage,
        },

        {
            path: "/user_profile",
            name: "UserProfile",
            component: UserProfile,
        },
        {
            path: "/temp",
            name: "temp",
            component: PetForm,
        },
        {
            path: "/temp2",
            name: "temp2",
            component: UserForm,
        },
        {
            path: "/tem",
            name: "temp2",
            component: Calendars,
        },


    ],
});


export default router