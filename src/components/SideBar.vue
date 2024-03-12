<template>
  <teleport to="body">
      <div class="sidebar">
        <ul>
          <li>Hello World</li>
        </ul>
      </div>
    </teleport>
</template>

<style scoped>
@media (min-width: 390px) {
  .sidebar {
    width: 50%;
    height: 100%;
    background-color: #333;
    color: #fff;
    opacity: 0.9;
    position: fixed;
    top: 0;
    right: 0;
    transition: left 0.3s ease;

    ul {
      list-style-type: none;
    }
  }
}
</style>