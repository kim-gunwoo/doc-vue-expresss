module.exports = {
  run: (_, res) => {
    return res.json({ health: "running" });
  },
};
