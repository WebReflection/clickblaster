<template>
  <div>
    Count {{ count }}<br>
    Increment {{ increment }}<br>
    <button v-on:click="update()" :clicks="count">
      Current {{ icount }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
      icount: 0,
      increment: 1 + Math.floor(Math.random() * 5),
    }
  },
  methods: {
    update() {
      this.setCount(this.count + 1);
      this.setICount(this.icount + this.increment);
      this.$nextTick(() => top.benchmark());
    },
    setCount(count) {
      this.count = count;
      window.count = count;
    },
    setICount(icount) {
      this.icount = icount;
    }
  }
}
</script>
