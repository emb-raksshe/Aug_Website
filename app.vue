<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <NuxtLayout>
      <header class="mt-8 mb-4 flex flex-col sm:flex-row justify-between items-center bg-gray-800 text-white py-4 px-6 rounded-lg shadow-lg">
        <div class="flex items-center">
          <h1 class="text-2xl sm:text-3xl font-semibold">
            <NuxtLink to="/" class="text-white hover:text-gray-300">Personal Website</NuxtLink>
          </h1>
          <p class="text-gray-400 ml-4 hidden sm:block">Learn Nuxt JS</p>
        </div>
        <nav class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
          <NuxtLink to="/" class="text-gray-200 hover:text-gray-400">Home</NuxtLink>
          <NuxtLink to="/about" class="text-gray-200 hover:text-gray-400">About Us</NuxtLink>
          <NuxtLink to="/contact" class="text-gray-200 hover:text-gray-400">Contact Us</NuxtLink>
          <NuxtLink to="/hello-world" class="text-gray-200 hover:text-gray-400">Hello World</NuxtLink>
          <Btn class="bg-gray-500 hover:bg-blue-700 text-black py-2 px-4 rounded">Hire Me</Btn>
        </nav>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
