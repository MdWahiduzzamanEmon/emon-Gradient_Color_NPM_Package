# Gradient color generator

This is a simple gradient color generator function which takes multiple color codes/name and returns a gradient color code.

## Installation

Use the package manager [npm/yarn](https://www.npmjs.com/) to install the package.((please read the documentation first))

```bash
npm i gradient-color-generator
```
```bash
yarn add gradient-color-generator
```

## Importing

```
import gradientGenerator from 'gradient-color-generator';

```
## How to use it

```
const gradient = gradientGenerator(colorList,step,angle);

```

```
colorList: Array of color codes or names (hex,rgb,rgba,hsl,hsla) or color names *required
step: Number of steps
angle: Angle of gradient

```
