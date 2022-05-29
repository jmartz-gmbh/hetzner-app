const request = {
  state: () => ({}),
  mutations: {
    "request-error": function (state, data) {
        console.log(data.error);
      data.that.$store.commit("messages-add", {
        that: data.that,
        status: data.error.code,
        message: data.error.message,
      });
    },
  },
};
export default request;
