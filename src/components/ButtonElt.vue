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
  @apply bg-gray-200 font-semibold py-1 px-4 rounded-md text-sm text-black;
}
.button-elt:hover {
  background: rgba(235, 235, 235, 0.8);
  cursor: pointer;
}
.button-elt:focus {
  outline:none;
}
/* Primary button */
.button-elt.primary {
  @apply bg-blue-50 text-white;
}
/* Secondary button */
.button-elt.secondary {
  @apply bg-green-50 text-white;
}
.button-elt.secondary:hover {
}
</style>
