const customerController = {
  async welcome(req, res, next) {
    return res.json({
      message: "Welcome",
    });
  },
};

export default customerController;
