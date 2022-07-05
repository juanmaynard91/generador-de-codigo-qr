import { createRouter, createWebHistory } from "vue-router"
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import Swal from 'sweetalert2'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../pages/Home.vue") },

        {
            path: "/about", component: () => import("../pages/About.vue"),
            meta: { requiresAuth: true }
        },

        /*{ path: "/login", component: () => import("../pages/Login.vue") },*/
    ]
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(), (user) => {
                removeListener();
                resolve(user);
            },
            reject
        )
    })
}

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            Swal.fire({
                title: 'No tienes acceso!',
                text: 'Debes registrarte',
                icon: 'error',
            })
            next("/");
        }
    } else {
        next();
    }
})

export default router;