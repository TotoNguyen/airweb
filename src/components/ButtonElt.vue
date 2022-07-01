<template>
  <button class="button-elt" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonElt',
  props: {
    type: {
      type: String,
      default: 'submit'
    },
  }
};
</script>

<style scoped>
.button-elt {
  border: none;
  transition: all 0.3s ease;
  font-size: inherit;
  font-size: 1.2rem;
  @apply bg-gray-button-bg text-lg text-white font-semibold rounded-md;
}
.button-elt:hover {
  cursor: pointer;
  @apply bg-gray-button-bg/80;
}
.button-elt:focus {
  outline:none;
}
/* Primary button */
.button-elt.primary {
  @apply h-full p-3;
}
.button-elt.icon-btn {
  @apply nomobile:h-full nomobile:p-3 xs:px-2 xs:py-1 xs:rounded-xl;
}
</style>
