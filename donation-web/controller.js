exports.index = {
  handler: function (request, reply) {
    console.log("handler called");
    reply('Hello');
  },
};
