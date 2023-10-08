# react-native-file-icon

React Native component that makes it easy to render themeable svg file icons.
React Native version of [react-file-icon](https://github.com/corygibbons/react-file-icon).
This library only supports iOS and Android.
for web support use [react-file-icon](https://github.com/corygibbons/react-file-icon)

## Installation

```sh
npm install react-native-file-icon
```
or
```sh
yarn add react-native-file-icon
```

### Dependencies
This library needs these dependencies to be installed in your project before you can use it:
```sh
yarn add react-native-svg
```
Using expo?
```sh
expo install react-native-svg
```

## Usage

### Default Style
We export an object of [default styles](src/defaultStyles.ts) that can be used as a starting point when rendering icons. Object keys map to file extensions.

```js
import { FileIcon, defaultStyles } from 'react-native-file-icon';

// Render a .docx icon with default styles
<FileIcon extension="docx" {...defaultStyles.docx} />;
```
### Props
| Prop              | Type               | Default       | Description                                                                                               |
|-------------------|--------------------|---------------|-----------------------------------------------------------------------------------------------------------|
| color             | string             | 'whitesmoke' | The base color of the file icon.                                                                         |
| extension         | string             | undefined     | The file extension that appears as a label on the icon.                                                  |
| fold              | boolean            | true          | Determines whether to display a folded corner on the file icon.                                          |
| foldColor         | string             | undefined     | The color of the folded corner (if displayed).                                                            |
| glyphColor        | string             | undefined     | The color of the icon glyph (if displayed).                                                               |
| gradientColor     | string             | 'white'       | The color of the gradient background behind the icon.                                                     |
| gradientOpacity   | number             | 0.25          | The opacity of the gradient background behind the icon.                                                   |
| labelColor        | string             | undefined     | The color of the label background on the icon.                                                            |
| labelTextColor    | string             | 'white'       | The color of the text on the label.                                                                       |
| labelUppercase    | boolean            | undefined     | Determines whether the label text should be displayed in uppercase.                                        |
| radius            | number             | 4             | The corner radius of the file icon.                                                                      |
| type              | FileIconType       | undefined     | The type of the file icon, which corresponds to a specific glyph.                                         |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
