import { b as useAuthStore, a as useCommonStore, q as navigateTo } from './server.mjs';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

function useCompareHelper({ product, emit }) {
  const ajaxingCompare = ref(false);
  const authStore = useAuthStore();
  const { authenticated } = storeToRefs(authStore);
  const commonStore = useCommonStore();
  const { setToastMessage, setToastError, postRequest } = commonStore;
  const addToCompare = async () => {
    var _a;
    if (!authenticated.value) {
      return navigateTo("/login");
    }
    ajaxingCompare.value = true;
    const data = await postRequest({
      params: { product_id: product.value.id },
      api: "compareListAction"
    });
    ajaxingCompare.value = false;
    if ((data == null ? void 0 : data.status) === 200) {
      if (!data.data) {
        emit("removed");
      }
      setToastMessage(data.message);
    } else {
      setToastError((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.form.join(", "));
    }
  };
  return { ajaxingCompare, addToCompare };
}

export { useCompareHelper as u };
//# sourceMappingURL=useCompareHelper-of9z6jwL.mjs.map
