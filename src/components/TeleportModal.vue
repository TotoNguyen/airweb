<template>
  <section v-if="openModal" class="modal">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'TeleportModal',
  data() {
    return {
      openModal : false
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    isNotif: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    open() {
      this.openModal = this.open;
    },
    openModal() {
      // Close automatically notifications after 2s
      if (this.openModal && this.isNotif) {
        setTimeout(() => { this.openModal = false; this.$emit('close') }, 1000);
      }
    }
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
}
main {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
footer {
  @apply flex justify-end;
}
.modal.notification {
  border: 1px solid black;
  top: auto;
  left: auto;
  right: 5%;
  bottom: 5%;
}
.modal.important {
  width: 80%;
  left: 10%;
  margin: auto; 
}
</style>
