import { reactive } from "vue";

export const state = reactive({
  loading: true,
  setLoading(status) {
    this.loading = status;
  },
});

// const initialState = {
//   loading: true,
// };

// const actions = {
//   setLoading(status) {
//     this.loading = status;
//   },
// };

// export const state = reactive({
//   ...initialState,
//   ...actions,
// });
