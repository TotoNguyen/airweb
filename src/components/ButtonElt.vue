<template>
  <button class="prodige-button" :type="type">
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
.prodige-button {
  border: none;
  transition: all 0.3s ease;
  font-size: inherit;
  @apply bg-gray-200 font-semibold py-1 px-4 rounded-md text-sm;
}
.prodige-button:hover {
  background: rgba(235, 235, 235, 0.8);
  cursor: pointer;
}
.prodige-button:focus {
  outline:none;
}
/* Primary button */
.prodige-button.primary {
  @apply bg-blue-50 text-white;
}
/* Secondary button */
.prodige-button.secondary {
  @apply bg-green-50 text-white;
}
.prodige-button.secondary:hover {
}
</style>
