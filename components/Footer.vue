<template>
  <footer class="bg-gray-800 text-white py-4">
    <div class="container mx-auto flex flex-col items-center justify-between text-center md:flex-row md:justify-between">
      <p class="mb-2 md:mb-0">&copy; {{ currentYear }} NUXT JS</p>
      <ul class="flex flex-wrap justify-center space-x-4">
        <li><a href="/about" class="hover:underline">About </a></li>
        <li><a href="/contact" class="hover:underline">Contact Us </a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
