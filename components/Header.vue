<template>
  <header class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex justify-between items-center">
      <nav class="flex space-x-4">
        <NuxtLink to="/" class="nav-item hover:underline">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-item hover:underline">About Us</NuxtLink>
        <NuxtLink to="/contact" class="nav-item hover:underline">Contact Us</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>