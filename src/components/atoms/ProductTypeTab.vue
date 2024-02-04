<template>
  <div class="my-navbar">
    <span v-if="!!tabs" class="tabs-container">
      <button
        v-for="tab in tabs"
        class="amount-btn"
        :class="{ selected: tab.text === selectedTab }"
        :key="tab.value"
        @click="switchTab(tab.text, tab.value)"
        @keyup="switchTab(tab.text, tab.value)"
      >
        <div class="name">{{tab.text}}</div>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'TabWithAmounts',
  props: {
    tabs: {
      type: Array,
      required: false,
      default: () => [],
    },
    initialValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedTab: '',
    }
  },
  methods: {
    switchTab(type, value) {
      if (this.selectedTab !== type) {
        this.selectedTab = type
        this.$emit('ticketType', type, value )
      }
    },
  },
  mounted() {
    this.selectedTab = this.initialValue
  },
}
</script>

<style lang="scss" scoped>
.my-navbar {
    background-color: $light-grey;
  text-align: center;
  width: 100%;
  border-radius: 6px;
  .tabs-container {
    display: flex;
    border-radius: 6px;
    width: 100%;
    height: 88px;
    
    span {
      width: max-content;
      display: block;
      transition: color 0.3s ease, border 0.3s ease;
      cursor: pointer;
      border-bottom: 2px solid transparent;
    }
    span:hover {
        background-color: $white;
    }
    .selected {
      background-color: $white;
    }
  }
}
.amount-btn {
  margin: 2px;
  border: 2px solid $light-grey;
  font-weight: 700;
  color: rgba(60, 60, 67, 0.6);
  font-size: 14px;
  line-height: 24px;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  width: 100%;


  &:hover {
    background-color: $light-grey;
  }
}
::-webkit-scrollbar {
  display: none;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  display: none;
}
@media (max-width: 1536px) {}
@media (max-width: 768px) {
  .amount-btn {
    padding: 11px 3px;
    font-size: 12px;
    line-height: 15px;
    border-radius: 6px;
    width: 100%;
  }
}
</style>
