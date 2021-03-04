module.exports = function(RED) {
  RED.plugins.registerPlugin("solarized-dark", {
    type: "node-red-theme",
    css: [
      "theme.min.css"
    ]
  })

  RED.plugins.registerPlugin("solarized-dark-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "scrollbars.min.css"
    ]
  })
}