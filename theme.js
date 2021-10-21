module.exports = function(RED) {
  RED.plugins.registerPlugin("solarized-dark", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css"
    ],
    monacoOptions: {
      theme: "solarized-dark"
    }
  })

  RED.plugins.registerPlugin("solarized-dark-scroll", {
    type: "node-red-theme",
    css: [
      "theme.min.css",
      "theme-customizations.min.css",
      "theme-scrollbars.min.css"
    ],
    monacoOptions: {
      theme: "solarized-dark"
    }
  })
}