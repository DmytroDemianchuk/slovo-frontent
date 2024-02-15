// event-bus.js у Vue 3
import { reactive } from 'vue';

export const EventBus = reactive({
  emit(event, data) {
    if (this[event]) {
      this[event].forEach(callback => callback(data));
    }
  },
  on(event, callback) {
    if (!this[event]) {
      this[event] = [];
    }
    this[event].push(callback);
  },
  off(event, callback) {
    if (this[event]) {
      const index = this[event].indexOf(callback);
      if (index > -1) {
        this[event].splice(index, 1);
      }
    }
  }
});
