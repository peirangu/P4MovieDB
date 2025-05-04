<template>
  <header class="d-flex justify-content-between align-items-center px-4 py-3 bg-black text-white shadow-sm">
    <a href="#" class="d-flex align-items-center gap-2">
      <img src="/assets/images/logo.svg" alt="MovieDB logo" width="50" height="50" />
      <span class="fs-5 fw-bold">MovieDB</span>
    </a>

    <div class="d-flex align-items-center gap-3">
      <div class="d-flex align-items-center gap-1">
        <ion-icon name="globe-outline" class="text-warning"></ion-icon>
        <select class="form-select form-select-sm bg-dark text-white border-secondary" style="width: auto">
          <option value="en">EN</option>
          <option value="au">AU</option>
          <option value="ar">AR</option>
        </select>
      </div>

      <button class="btn btn-primary btn-sm px-3">Sign In</button>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-block: 25px;
  transition: var(--transition-2);
  z-index: 4;
}

.header.active {
  background: var(--eerie-black);
  padding-block: 20px;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-open-btn {
  color: var(--white);
  font-size: 40px;
}

.navbar {
  position: fixed;
  top: 0;
  right: -300px;
  background: var(--eerie-black);
  width: 100%;
  max-width: 300px;
  height: 100%;
  box-shadow: -1px 0 3px hsl(0, 0%, 0%, 0.2);
  transition: 0.15s ease-in;
  visibility: hidden;
  z-index: 3;
}

.navbar.active {
  right: 0;
  visibility: visible;
  transition: 0.25s ease-out;
}

.navbar-top {
  padding: 30px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-close-btn {
  color: var(--white);
  font-size: 25px;
  padding: 5px;
}

.menu-close-btn ion-icon {
  --ionicon-stroke-width: 80px;
}

.navbar-list {
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  margin-bottom: 30px;
}

.navbar-link {
  color: var(--white);
  font-size: var(--fs-8);
  font-weight: var(--fw-500);
  padding: 10px 25px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  transition: var(--transition-1);
}

.navbar-link:is(:hover, :focus) {
  color: var(--citrine);
}

.overlay {
  position: fixed;
  inset: 0;
  background: hsla(204, 18%, 11%, 0.8);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  transition: var(--transition-2);
}

.overlay.active {
  opacity: 1;
  pointer-events: all;
}


/*-----------------------------------*\
 * #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 768px) {

  .header .container {
    gap: 30px;
  }

  .header-actions {
    display: flex;
    margin-left: auto;
    align-items: center;
    gap: 35px;
  }

  .header-actions .btn-primary {
    display: none;
  }

  .search-btn {
    position: relative;
    color: var(--white);
  }

  .search-btn ion-icon {
    --ionicon-stroke-width: 80px;
  }

  .search-btn::after {
    content: "";
    position: absolute;
    top: 1px;
    right: -20px;
    background: hsla(0, 0%, 100%, 0.1);
    width: 2px;
    height: 14px;
  }

  .lang-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .lang-wrapper label {
    color: var(--citrine);
    font-size: 20px;
  }

  .lang-wrapper select {
    color: var(--white);
    font-size: var(--fs-9);
    font-weight: var(--fw-700);
  }

  .lang-wrapper option {
    color: var(--black);
  }
}

@media (min-width: 992px) {

  .header.active {
    padding-block: 5px;
  }

  .menu-open-btn,
  .navbar-top,
  .navbar-social-list {
    display: none;
  }

  .navbar {
    all: unset;
    margin-left: auto;
  }

  .header-actions {
    order: 1;
    margin-left: 0;
  }

  .navbar-list {
    all: unset;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .navbar-link {
    border-bottom: none;
    font-size: var(--fs-9);
    font-weight: var(--fw-700);
    text-transform: uppercase;
    padding: 30px 15px;
  }

  .overlay {
    display: none;
  }
}

@media (min-width: 1200px) {
  .navbar {
    margin-inline: auto;
  }

  .header-actions .btn-primary {
    display: block;
    --fs-11: 14px;
    padding: 10px 35px;
    letter-spacing: 1px;
  }
}
</style>