import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Home from '@/pages/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', component: Home },
        { path: 'proveedores', component: () => import('@/pages/Proveedores.vue') },
        { path: 'pedidos/hacer', component: () => import('@/pages/Pedidos/HacerPedido.vue') },
        { path: 'pedidos/historial', component: () => import('@/pages/Pedidos/HistorialPedidos.vue') },
        { path: 'horarios/crear', component: () => import('@/pages/Horarios/CrearHorario.vue') },
        { path: 'horarios/ver', component: () => import('@/pages/Horarios/VerHorarios.vue') },
        { path: 'horarios/vacaciones', component: () => import('@/pages/Horarios/Vacaciones.vue') },
        { path: 'inventarios/crear', component: () => import('@/pages/Inventarios/CrearInventario.vue') },
        { path: 'inventarios/historial', component: () => import('@/pages/Inventarios/HistorialInventarios.vue') },
      ]
    }
  ]
})