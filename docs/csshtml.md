---
title: CSS/HTML & JavaScript
---

## CSS

### Reference a class

```
.className
```

### Reference an id

```
#id
```

### Select element by specifying attributes of the node and its ancestors

```
#grandfatherId .parentClass #targetNodeId
```

## HTML

### Assign class to page element

```markup
<span class="className"> ... </span>
```

:::note
A class can be attribute of any tag.
:::

### Assign id to page element

```markup
<div id="anID">...</div>
```

:::note
- Has to be unique.
- Can be attribute of any tag.
:::

### HTML5 version identifier

First line of the document should be:

```markup
<!DOCTYPE html>
```

### Use style from external CSS file

```markup
<link rel="stylesheet" href="targetFile.css" />
```

## JavaScript

### Axios API template

```javascript
import axios from "axios";

const server = "http://localhost:9000";

const API = {
  get: (path) =>
    axios.get(`${server}${path}`).then((response) => response.data),
  put: (path, body) =>
    axios.put(`${server}${path}`, body).then((response) => response.data),
  post: (path, body) =>
    axios.post(`${server}${path}`, body).then((response) => response.data),
};

export default API;
```

:::note
Package name: **axios**.
:::

### Install ESLint and airbnb rules

```
cd projectDir
```
```
npm install --save-dev babel-eslint
```
```bash
npx install-peerdeps --dev eslint-config-airbnb # for react projects
```
```bash
npx install-peerdeps --dev eslint-config-airbnb-base # for projects that don't use react
```

:::note
- npm 5+ required.
- Packages are installed for the current project and saved as
  devDependencies in package.json.
:::
:::info
[Reference](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb).
:::

Create file **.eslintrc** with the following content.

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "class-methods-use-this": "off",
    "import/extensions": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      { "components": ["Link"], "specialLink": ["to"] }
    ],
    "jsx-a11y/label-has-for": "off",
    "react/destructuring-assignment": "off",
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/jsx-one-expression-per-line": "off"
  }
}
```

:::tip
Enable or disable individual rules in the rules object.
:::
