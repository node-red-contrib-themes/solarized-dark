# Solarized Dark Node-RED theme

![Project Maintenance][maintenance-shield]
[![License][license-shield]](LICENSE)
[![GitHub Activity][commits-shield]][commits]
[![GitHub Last Commit][last-commit-shield]][commits]

[![NPM Shield][npm-shield]][npm-package]

<a href="https://www.buymeacoffee.com/mbonani" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" height="60px" width="217px"></a>

A dark theme for [Node-RED][node-red] based on the [Solarized color palette][solarized] by [Ethan Schoonover][schoonover].

![screenshot](https://raw.githubusercontent.com/node-red-contrib-themes/solarized-dark/master/images/screenshot.png)

## Install

Install via npm

```shell
npm install @node-red-contrib-themes/solarized-dark
```

## Configuration

Add the following to the `editorTheme` section of your `settings.js`, and then restart Node-RED.

```js
editorTheme: {
    theme: "solarized-dark"
},
```

### Themed Scrollbars (EXPERIMENTAL)

This includes the theme and changes to the scrollbars to make them better fit the theme.

**NOTE**: This is ***EXPERIMENTAL*** and may not work on all browsers.

If you want to try it, add the following to the `editorTheme` section of your `settings.js`, and then restart Node-RED.

```js
editorTheme: {
    theme: "solarized-dark-scroll"
},
```

For more details on the configuration please refer to the
[Node-RED official documentation][node-red-doc].

Enjoy!

## License

[MIT][license]

[commits-shield]: https://img.shields.io/github/commit-activity/y/node-red-contrib-themes/solarized-dark.svg
[commits]: https://github.com/node-red-contrib-themes/solarized-dark/commits/master
[last-commit-shield]: https://img.shields.io/github/last-commit/node-red-contrib-themes/solarized-dark.svg
[license]: https://github.com/node-red-contrib-themes/solarized-dark/blob/master/LICENSE
[license-shield]: https://img.shields.io/github/license/node-red-contrib-themes/solarized-dark.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2021.svg
[node-red-doc]: https://nodered.org/docs/user-guide/runtime/configuration
[node-red]: https://nodered.org/
[npm-package]: https://nodei.co/npm/@node-red-contrib-themes/solarized-dark
[npm-shield]: https://nodei.co/npm/@node-red-contrib-themes/solarized-dark.png
[schoonover]: https://ethanschoonover.com
[solarized]: https://ethanschoonover.com/solarized/
