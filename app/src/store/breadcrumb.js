const breadcrumb = {
  state: () => ({
    items: [],
  }),
  mutations: {
    "breadcrumb-add": function (state, data) {
      state.items.push({
        link: data.link,
        label: data.label,
      });
    },
    "breadcrumb-reset": function (state) {
      state.items = [];
      state.items.push({
        link: "/",
        label: "Home",
        icon: "house",
      });
    },
  },
};
export default breadcrumb;
