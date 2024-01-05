import { reactive } from "vue";

const initialState = {
  loading: true,
};

const actions = {
  setLoading(status) {
    this.loading = status;
  },
};

export const state = reactive({
  ...initialState,
  ...actions,
});
