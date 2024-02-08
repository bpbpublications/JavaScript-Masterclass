<template>
  <div>
    <custom-component-with-props :greeting="customGreeting" name="John"></custom-component-with-props>
  </div>
</template>

<script>
import CustomComponentWithProps from './CustomComponentWithProps.vue';

export default {
  components: {
    CustomComponentWithProps,
  },
  data() {
    return {
      customGreeting: 'Hola',
    };
  },
};
</script>
