import { createWebHistory,createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import AboutComponent from "./components/AboutComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";


const routes=[
  {
    name:'HomeComponent',
    path:'/',
    component:HomeComponent,

  } ,
  {
    name:'AboutComponent',
    path:'/AboutComponent',
    component:AboutComponent,

  } ,
  {
    name:'LoginComponent',
    path:'/LoginComponent',
    component:LoginComponent,

  } ,
];
const router=createRouter({
    history:createWebHistory(),
    routes,
});
export default router;