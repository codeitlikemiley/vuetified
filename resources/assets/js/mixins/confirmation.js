export default {
  methods: {
    confirmed(cb) {
      let self = this;
      return params => {
        cb(params);
      };
    },
    openDialog(item) {
      Bus.$emit("open-confirmation", item);
    }
  }
};
