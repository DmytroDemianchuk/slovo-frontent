<template>
  <header class="app-header">
    <div class="content">
      <h1 class="header__title">Каталог Плюс</h1>
      <nav class="navigation">
        <router-link to="/">Головна </router-link>
        <router-link to="/convert">Завантажити продукт  </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
/* Styles based on the provided footer component */
.app-header {
  padding: 20px;
  background-color: var(--container-color);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  color: var(--title-color);
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation {
  margin-top: 10px;
}

.navigation a {
  color: var(--title-color);
  text-decoration: none;
  margin: 0 15px;
}

.navigation a:hover {
  text-decoration: underline;
}

.header__title {
  margin: 0;
  font-size: 24px;
}
</style>
