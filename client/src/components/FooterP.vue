<template>
  <footer class="footer">
    <div class="footer__container container">
      <h1 class="footer__title">Каталог Плюс</h1>
      <ul class="footer__list">
      </ul>
      <span class="footer__coppy">
        2024 &#169; catalogPlus.com. Всі права захищено
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
/* Styles based on your provided CSS */
.footer {
  background-color: var(--container-color);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.footer__container {
  padding: 2rem 0 6rem;
}

.footer__title,
.footer__link {
  color: var(--title-color);
}

.footer__title {
  text-align: center;
  margin-bottom: var(--mb-2);
}

.footer__link:hover {
  color: var(--title-color-dark);
}

.footer__list {
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: var(--mb-2);
}

.footer__social {
  display: flex;
  justify-content: center;
  column-gap: 1.25rem;
}

.footer__social-link-facebook,
.footer__social-link-instagram,
.footer__social-link-twitter {
  background-color: black;
  color: white;
  font-size: 1.25rem;
  padding: 1.4rem;
  border-radius: 0.5rem;
  display: inline-flex;
}

.footer__social-link-facebook:hover {
  background-color: #3b5998;
}

.footer__social-link-instagram:hover {
  background-color: #E1306C;
}

.footer__social-link-twitter:hover {
  background-color: #00acee;
}

.footer__coppy {
  display: block;
  margin-top: 4.5rem;
  color: var(--title-color);
  text-align: center;
  font-size: var(--smaller-font-size);
}

/* Additional styles for large devices */
@media screen and (max-width: 992px) {
  .footer__social-link {
    padding: 1.2rem;
    border-radius: 0.7rem;
    font-size: 1.4rem;
  }
}
</style>
