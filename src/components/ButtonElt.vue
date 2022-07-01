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
  @apply bg-gray-button-bg text-lg text-white font-semibold h-full p-3 rounded-md;
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
  @apply bg-blue-50 text-white;
}
</style>
