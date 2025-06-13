<template>
  <aside class="w-64 bg-gray-800 text-white h-full">
    <nav class="flex flex-col p-4 space-y-2">
      <RouterLink to="/" class="hover:bg-gray-700 p-2 rounded">Home</RouterLink>
      <RouterLink to="/proveedores" class="hover:bg-gray-700 p-2 rounded">Proveedores</RouterLink>
      <RouterLink to="/pedidos/hacer" class="hover:bg-gray-700 p-2 rounded">Hacer Pedido</RouterLink>
      <RouterLink to="/pedidos/historial" class="hover:bg-gray-700 p-2 rounded">Historial Pedidos</RouterLink>
      <RouterLink to="/horarios/crear" class="hover:bg-gray-700 p-2 rounded">Crear Horarios</RouterLink>
      <RouterLink to="/horarios/ver" class="hover:bg-gray-700 p-2 rounded">Ver Horarios</RouterLink>
      <RouterLink to="/horarios/vacaciones" class="hover:bg-gray-700 p-2 rounded">Vacaciones</RouterLink>
      <RouterLink to="/inventarios/crear" class="hover:bg-gray-700 p-2 rounded">Crear Inventario</RouterLink>
      <RouterLink to="/inventarios/historial" class="hover:bg-gray-700 p-2 rounded">Historial Inventarios</RouterLink>
    </nav>
  </aside>
</template>