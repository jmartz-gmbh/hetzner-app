export default {
    state: () => ({
      auth: '',
    }),
    mutations: {
      "token-add": function (state,token) {
        state.auth = token;
      },
      "token-load": function (state) {
        state.auth = localStorage.getItem('token');
      },
    },
  };;
  