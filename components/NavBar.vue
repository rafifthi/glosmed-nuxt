<template>
  <div
    id="nav"
    class="bg-transparent fixed top-0 left-0 w-full flex items-center z-10"
    @scroll="handleScroll()"
  >
    <div class="container">
      <div class="flex items-center justify-between relative py-2">
        <a href="/" class="block">
          <img src="../assets/img/logo.svg" class="h-12 lg:h-16" alt="Glosmed Logo" />
        </a>
        <div class="flex items-center px-4">
          <button
            id="hamburger"
            name="hamburger"
            type="button"
            class="block absolute right-4 lg:hidden"
            @click="handleClick()"
          >
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-top-left"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out"
            ></span>
            <span
              class="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
            ></span>
          </button>

          <nav
            id="nav-menu"
            class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-3 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
          >
            <ul class="block lg:flex self-center text-slate-600">
              <li class="group">
                <NuxtLink
                  to="/About"
                  class="py-2 mx-6 flex group-hover:text-primary"
                >
                  About
                </NuxtLink>
              </li>
              <li class="group">
                <NuxtLink
                  to="/Product"
                  class="py-2 mx-6 flex group-hover:text-primary"
                >
                  Product
                </NuxtLink>
              </li>
              <li class="group">
                <NuxtLink
                  to="/Career"
                  class="py-2 mx-6 flex group-hover:text-primary"
                >
                  Career
                </NuxtLink>
              </li>
              <li class="group">
                <NuxtLink
                  to="/Blogs"
                  class="py-2 mx-6 flex group-hover:text-primary"
                >
                  Blogs
                </NuxtLink>
              </li>
              <li class="group">
                <a
                  href="/Contact"
                  class="py-2 lg:ml-6 flex btn-primary"
                >Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const header = document.querySelector('#nav')

      if (window.scrollY > 100) {
        header.classList.add('navbar-fixed')
      } else {
        header.classList.remove('navbar-fixed')
      }
    },

    handleClick () {
      const hamburger = document.querySelector('#hamburger')
      const navMenu = document.querySelector('#nav-menu')

      hamburger.classList.toggle('hamburger-active')
      navMenu.classList.toggle('hidden')
    }
  }
}
</script>

<style></style>
