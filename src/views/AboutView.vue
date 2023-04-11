<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myArray: [
        { id: 1, name: "miguel", city: "panama" },
        { id: 2, name: "jose", city: "penonome" },
        { id: 3, name: "chirino", city: "tole" },
      ],
    };
  },
  methods: {
    trySomething() {
      const data = { ...this.myArray };
      const data2 = this.myArray;
      console.log(data, "data");
      console.log(data2, "data");
    },
  },
  mounted() {
    this.trySomething();
  },
};
</script>
