const messages = {
  state: () => ({
    items: [],
  }),
  mutations: {
    "messages-add": function (state, data) {
      state.items.push({
        status: data.status,
        message: data.message,
      });
    },
    "messages-reset": function (state) {
      state.items = [];
      console.log("reset");
    },
    "messages-remove": function (state, data) {
      state.items.splice(data.index, 1);
    },
  },
};
export default messages;
