import { defineStore } from 'pinia';

const state = () => ({
  countryList: null,
  phoneList: null
});
const actions = {
  setCountryList(list) {
    this.countryList = list;
  },
  setPhoneList(list) {
    this.phoneList = list;
  }
};
const useResourceStore = defineStore("resource", {
  state,
  actions
});

export { useResourceStore as u };
//# sourceMappingURL=resource-Did0obd8.mjs.map
