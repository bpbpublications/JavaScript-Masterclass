<template>
  <div>
    <p>{{ greeting }} {{ name }}!</p>
  </div>
</template>

<script>
export default {
  props: {
    greeting: {
      type: String,
      default: 'Hello',
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
