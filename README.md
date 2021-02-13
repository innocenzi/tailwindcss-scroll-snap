<p align="center">
  <h1 align="center">Scroll Snap</h1>
  <p align="center">
    <a href="https://github.com/innocenzi/tailwindcss-scroll-snap/releases">
      <img alt="GitHub release (latest SemVer including pre-releases)" src="https://img.shields.io/github/v/release/innocenzi/tailwindcss-scroll-snap?include_prereleases&style=flat-square">
    </a>
    &nbsp;
    <a href="https://npmjs.com/package/tailwindcss-scroll-snap">
      <img alt="npm" src="https://img.shields.io/npm/v/tailwindcss-scroll-snap?style=flat-square">
    </a>
    &nbsp;
    <a href="https://npmjs.com/package/tailwindcss-scroll-snap">
      <img alt="npm" src="https://img.shields.io/npm/dt/tailwindcss-scroll-snap?style=flat-square&color=blue">
    </a>
  </p>
</p>

# Introduction

`tailwindcss-scroll-snap` adds [CSS Scroll Snap](https://css-tricks.com/practical-css-scroll-snapping/) utilities to Tailwind CSS.

It makes use of [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) by default in order to make composable utilities for [Scroll Snap Types](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type), but you can override the `scrollSnapType` key in your Tailwind config if you don't want to use CSS custom properties.

**Get started:**

```console
$ yarn add tailwindcss-scroll-snap --dev
```

After installing the NPM package, add it to the plugins part of `tailwind.config.js`.

```js
module.exports = {
	theme: {},
	variants: {
		// Add variants as needed
		scrollSnapType: ['responsive'],
	},
	plugins: [require('tailwindcss-scroll-snap')],
};
```

# Usage

This plugin creates utilities for [`scroll-snap-align`](#align), [`scroll-snap-type`](#Type), [`scroll-snap-stop`](#Stop), [`scroll-margin`](#margin) and [`scroll-padding`](#Padding). Each of them [can be used with variants](https://tailwindcss.com/docs/configuration/#variants).

## Align

Utilities for the [`scroll-snap-align`](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-align) property.

| Class          | Property                     |
| -------------- | ---------------------------- |
| `.snap-start`  | `scroll-snap-align: start;`  |
| `.snap-end`    | `scroll-snap-align: end;`    |
| `.snap-center` | `scroll-snap-align: center;` |

You can override `scrollSnapAlign` in the theme of the Tailwind configuration if you want to change them.

## Type

Utilities for the [`scroll-snap-type`](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-type) property.

| Class             | Property                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `.no-snap`        | `.scroll-snap-type: none;`                                                                       |
| `.snap`           | `.scroll-snap-type: var(--scroll-snap-direction, both) var(--scroll-snap-constraint, mandatory)` |
| `.snap-x`         | `--scroll-snap-direction: x;`                                                                    |
| `.snap-y`         | `--scroll-snap-direction: y;`                                                                    |
| `.snap-both`      | `--scroll-snap-direction: both;`                                                                 |
| `.snap-block`     | `--scroll-snap-direction: block;`                                                                |
| `.snap-inline`    | `--scroll-snap-direction: inline;`                                                               |
| `.snap-mandatory` | `--scroll-snap-constraint: mandatory;`                                                           |
| `.snap-proximity` | `--scroll-snap-constraint: proximity;`                                                           |

These utilities work with composition. Except `.no-snap`, you need to combine them. If you're not happy with the way it works, you can override `scrollSnapType` in the theme of the Tailwind configuration.

```html
<section class="snap snap-y snap-mandatory">
	<!-- ... -->
</section>
```

A configuration for variable-less `scroll-snap-type` utilities could look like that:

```js
{
    'no-snap': 'none',
    'snap-y-mandatory': 'y mandatory',
    'snap-y-proximity': 'y proximity',
}
```

It is recommended that in the case where you need to override the configuration, you only add utilities you plan on actually using.

## Stop

Utilities for the [`scroll-snap-stop`](https://developer.mozilla.org/docs/Web/CSS/scroll-snap-stop) property.

| Class          | Property                    |
| -------------- | --------------------------- |
| `.always-stop` | `scroll-snap-stop: always;` |

You can override `scrollSnapStop` in the theme of the Tailwind configuration if you want to change them.

## Margin

Utilities for the [`scroll-margin`](https://developer.mozilla.org/docs/Web/CSS/scroll-margin) property.

<details>
<summary>See the default list.</summary>
<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.snap-m-0</code></td>
      <td><code>scroll-margin: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-1</code></td>
      <td><code>scroll-margin: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-2</code></td>
      <td><code>scroll-margin: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-3</code></td>
      <td><code>scroll-margin: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-4</code></td>
      <td><code>scroll-margin: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-5</code></td>
      <td><code>scroll-margin: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-6</code></td>
      <td><code>scroll-margin: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-8</code></td>
      <td><code>scroll-margin: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-10</code></td>
      <td><code>scroll-margin: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-12</code></td>
      <td><code>scroll-margin: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-16</code></td>
      <td><code>scroll-margin: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-20</code></td>
      <td><code>scroll-margin: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-24</code></td>
      <td><code>scroll-margin: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-32</code></td>
      <td><code>scroll-margin: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-40</code></td>
      <td><code>scroll-margin: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-48</code></td>
      <td><code>scroll-margin: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-56</code></td>
      <td><code>scroll-margin: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-64</code></td>
      <td><code>scroll-margin: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-auto</code></td>
      <td><code>scroll-margin: auto;</code></td>
    </tr>
    <tr>
      <td><code>.snap-m-px</code></td>
      <td><code>scroll-margin: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-1</code></td>
      <td><code>scroll-margin: -0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-2</code></td>
      <td><code>scroll-margin: -0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-3</code></td>
      <td><code>scroll-margin: -0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-4</code></td>
      <td><code>scroll-margin: -1rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-5</code></td>
      <td><code>scroll-margin: -1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-6</code></td>
      <td><code>scroll-margin: -1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-8</code></td>
      <td><code>scroll-margin: -2rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-10</code></td>
      <td><code>scroll-margin: -2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-12</code></td>
      <td><code>scroll-margin: -3rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-16</code></td>
      <td><code>scroll-margin: -4rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-20</code></td>
      <td><code>scroll-margin: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-24</code></td>
      <td><code>scroll-margin: -6rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-32</code></td>
      <td><code>scroll-margin: -8rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-40</code></td>
      <td><code>scroll-margin: -10rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-48</code></td>
      <td><code>scroll-margin: -12rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-56</code></td>
      <td><code>scroll-margin: -14rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-64</code></td>
      <td><code>scroll-margin: -16rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-m-px</code></td>
      <td><code>scroll-margin: -1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-0</code></td>
      <td><code>scroll-margin-top: 0; scroll-margin-bottom: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-0</code></td>
      <td><code>scroll-margin-left: 0; scroll-margin-right: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-1</code></td>
      <td><code>scroll-margin-top: 0.25rem; scroll-margin-bottom: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-1</code></td>
      <td><code>scroll-margin-left: 0.25rem; scroll-margin-right: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-2</code></td>
      <td><code>scroll-margin-top: 0.5rem; scroll-margin-bottom: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-2</code></td>
      <td><code>scroll-margin-left: 0.5rem; scroll-margin-right: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-3</code></td>
      <td><code>scroll-margin-top: 0.75rem; scroll-margin-bottom: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-3</code></td>
      <td><code>scroll-margin-left: 0.75rem; scroll-margin-right: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-4</code></td>
      <td><code>scroll-margin-top: 1rem; scroll-margin-bottom: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-4</code></td>
      <td><code>scroll-margin-left: 1rem; scroll-margin-right: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-5</code></td>
      <td><code>scroll-margin-top: 1.25rem; scroll-margin-bottom: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-5</code></td>
      <td><code>scroll-margin-left: 1.25rem; scroll-margin-right: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-6</code></td>
      <td><code>scroll-margin-top: 1.5rem; scroll-margin-bottom: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-6</code></td>
      <td><code>scroll-margin-left: 1.5rem; scroll-margin-right: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-8</code></td>
      <td><code>scroll-margin-top: 2rem; scroll-margin-bottom: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-8</code></td>
      <td><code>scroll-margin-left: 2rem; scroll-margin-right: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-10</code></td>
      <td><code>scroll-margin-top: 2.5rem; scroll-margin-bottom: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-10</code></td>
      <td><code>scroll-margin-left: 2.5rem; scroll-margin-right: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-12</code></td>
      <td><code>scroll-margin-top: 3rem; scroll-margin-bottom: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-12</code></td>
      <td><code>scroll-margin-left: 3rem; scroll-margin-right: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-16</code></td>
      <td><code>scroll-margin-top: 4rem; scroll-margin-bottom: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-16</code></td>
      <td><code>scroll-margin-left: 4rem; scroll-margin-right: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-20</code></td>
      <td><code>scroll-margin-top: 5rem; scroll-margin-bottom: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-20</code></td>
      <td><code>scroll-margin-left: 5rem; scroll-margin-right: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-24</code></td>
      <td><code>scroll-margin-top: 6rem; scroll-margin-bottom: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-24</code></td>
      <td><code>scroll-margin-left: 6rem; scroll-margin-right: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-32</code></td>
      <td><code>scroll-margin-top: 8rem; scroll-margin-bottom: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-32</code></td>
      <td><code>scroll-margin-left: 8rem; scroll-margin-right: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-40</code></td>
      <td><code>scroll-margin-top: 10rem; scroll-margin-bottom: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-40</code></td>
      <td><code>scroll-margin-left: 10rem; scroll-margin-right: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-48</code></td>
      <td><code>scroll-margin-top: 12rem; scroll-margin-bottom: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-48</code></td>
      <td><code>scroll-margin-left: 12rem; scroll-margin-right: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-56</code></td>
      <td><code>scroll-margin-top: 14rem; scroll-margin-bottom: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-56</code></td>
      <td><code>scroll-margin-left: 14rem; scroll-margin-right: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-64</code></td>
      <td><code>scroll-margin-top: 16rem; scroll-margin-bottom: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-64</code></td>
      <td><code>scroll-margin-left: 16rem; scroll-margin-right: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-auto</code></td>
      <td><code>scroll-margin-top: auto; scroll-margin-bottom: auto;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-auto</code></td>
      <td><code>scroll-margin-left: auto; scroll-margin-right: auto;</code></td>
    </tr>
    <tr>
      <td><code>.snap-my-px</code></td>
      <td><code>scroll-margin-top: 1px; scroll-margin-bottom: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mx-px</code></td>
      <td><code>scroll-margin-left: 1px; scroll-margin-right: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-1</code></td>
      <td><code>scroll-margin-top: -0.25rem; scroll-margin-bottom: -0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-1</code></td>
      <td><code>scroll-margin-left: -0.25rem; scroll-margin-right: -0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-2</code></td>
      <td><code>scroll-margin-top: -0.5rem; scroll-margin-bottom: -0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-2</code></td>
      <td><code>scroll-margin-left: -0.5rem; scroll-margin-right: -0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-3</code></td>
      <td><code>scroll-margin-top: -0.75rem; scroll-margin-bottom: -0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-3</code></td>
      <td><code>scroll-margin-left: -0.75rem; scroll-margin-right: -0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-4</code></td>
      <td><code>scroll-margin-top: -1rem; scroll-margin-bottom: -1rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-4</code></td>
      <td><code>scroll-margin-left: -1rem; scroll-margin-right: -1rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-5</code></td>
      <td><code>scroll-margin-top: -1.25rem; scroll-margin-bottom: -1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-5</code></td>
      <td><code>scroll-margin-left: -1.25rem; scroll-margin-right: -1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-6</code></td>
      <td><code>scroll-margin-top: -1.5rem; scroll-margin-bottom: -1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-6</code></td>
      <td><code>scroll-margin-left: -1.5rem; scroll-margin-right: -1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-8</code></td>
      <td><code>scroll-margin-top: -2rem; scroll-margin-bottom: -2rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-8</code></td>
      <td><code>scroll-margin-left: -2rem; scroll-margin-right: -2rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-10</code></td>
      <td><code>scroll-margin-top: -2.5rem; scroll-margin-bottom: -2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-10</code></td>
      <td><code>scroll-margin-left: -2.5rem; scroll-margin-right: -2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-12</code></td>
      <td><code>scroll-margin-top: -3rem; scroll-margin-bottom: -3rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-12</code></td>
      <td><code>scroll-margin-left: -3rem; scroll-margin-right: -3rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-16</code></td>
      <td><code>scroll-margin-top: -4rem; scroll-margin-bottom: -4rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-16</code></td>
      <td><code>scroll-margin-left: -4rem; scroll-margin-right: -4rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-20</code></td>
      <td><code>scroll-margin-top: -5rem; scroll-margin-bottom: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-20</code></td>
      <td><code>scroll-margin-left: -5rem; scroll-margin-right: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-24</code></td>
      <td><code>scroll-margin-top: -6rem; scroll-margin-bottom: -6rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-24</code></td>
      <td><code>scroll-margin-left: -6rem; scroll-margin-right: -6rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-32</code></td>
      <td><code>scroll-margin-top: -8rem; scroll-margin-bottom: -8rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-32</code></td>
      <td><code>scroll-margin-left: -8rem; scroll-margin-right: -8rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-40</code></td>
      <td><code>scroll-margin-top: -10rem; scroll-margin-bottom: -10rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-40</code></td>
      <td><code>scroll-margin-left: -10rem; scroll-margin-right: -10rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-48</code></td>
      <td><code>scroll-margin-top: -12rem; scroll-margin-bottom: -12rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-48</code></td>
      <td><code>scroll-margin-left: -12rem; scroll-margin-right: -12rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-56</code></td>
      <td><code>scroll-margin-top: -14rem; scroll-margin-bottom: -14rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-56</code></td>
      <td><code>scroll-margin-left: -14rem; scroll-margin-right: -14rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-64</code></td>
      <td><code>scroll-margin-top: -16rem; scroll-margin-bottom: -16rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-64</code></td>
      <td><code>scroll-margin-left: -16rem; scroll-margin-right: -16rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-my-px</code></td>
      <td><code>scroll-margin-top: -1px; scroll-margin-bottom: -1px;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mx-px</code></td>
      <td><code>scroll-margin-left: -1px; scroll-margin-right: -1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-0</code></td>
      <td><code>scroll-margin-top: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-0</code></td>
      <td><code>scroll-margin-right: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-0</code></td>
      <td><code>scroll-margin-bottom: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-0</code></td>
      <td><code>scroll-margin-left: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-1</code></td>
      <td><code>scroll-margin-top: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-1</code></td>
      <td><code>scroll-margin-right: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-1</code></td>
      <td><code>scroll-margin-bottom: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-1</code></td>
      <td><code>scroll-margin-left: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-2</code></td>
      <td><code>scroll-margin-top: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-2</code></td>
      <td><code>scroll-margin-right: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-2</code></td>
      <td><code>scroll-margin-bottom: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-2</code></td>
      <td><code>scroll-margin-left: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-3</code></td>
      <td><code>scroll-margin-top: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-3</code></td>
      <td><code>scroll-margin-right: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-3</code></td>
      <td><code>scroll-margin-bottom: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-3</code></td>
      <td><code>scroll-margin-left: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-4</code></td>
      <td><code>scroll-margin-top: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-4</code></td>
      <td><code>scroll-margin-right: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-4</code></td>
      <td><code>scroll-margin-bottom: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-4</code></td>
      <td><code>scroll-margin-left: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-5</code></td>
      <td><code>scroll-margin-top: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-5</code></td>
      <td><code>scroll-margin-right: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-5</code></td>
      <td><code>scroll-margin-bottom: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-5</code></td>
      <td><code>scroll-margin-left: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-6</code></td>
      <td><code>scroll-margin-top: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-6</code></td>
      <td><code>scroll-margin-right: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-6</code></td>
      <td><code>scroll-margin-bottom: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-6</code></td>
      <td><code>scroll-margin-left: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-8</code></td>
      <td><code>scroll-margin-top: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-8</code></td>
      <td><code>scroll-margin-right: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-8</code></td>
      <td><code>scroll-margin-bottom: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-8</code></td>
      <td><code>scroll-margin-left: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-10</code></td>
      <td><code>scroll-margin-top: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-10</code></td>
      <td><code>scroll-margin-right: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-10</code></td>
      <td><code>scroll-margin-bottom: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-10</code></td>
      <td><code>scroll-margin-left: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-12</code></td>
      <td><code>scroll-margin-top: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-12</code></td>
      <td><code>scroll-margin-right: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-12</code></td>
      <td><code>scroll-margin-bottom: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-12</code></td>
      <td><code>scroll-margin-left: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-16</code></td>
      <td><code>scroll-margin-top: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-16</code></td>
      <td><code>scroll-margin-right: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-16</code></td>
      <td><code>scroll-margin-bottom: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-16</code></td>
      <td><code>scroll-margin-left: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-20</code></td>
      <td><code>scroll-margin-top: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-20</code></td>
      <td><code>scroll-margin-right: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-20</code></td>
      <td><code>scroll-margin-bottom: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-20</code></td>
      <td><code>scroll-margin-left: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-24</code></td>
      <td><code>scroll-margin-top: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-24</code></td>
      <td><code>scroll-margin-right: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-24</code></td>
      <td><code>scroll-margin-bottom: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-24</code></td>
      <td><code>scroll-margin-left: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-32</code></td>
      <td><code>scroll-margin-top: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-32</code></td>
      <td><code>scroll-margin-right: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-32</code></td>
      <td><code>scroll-margin-bottom: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-32</code></td>
      <td><code>scroll-margin-left: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-40</code></td>
      <td><code>scroll-margin-top: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-40</code></td>
      <td><code>scroll-margin-right: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-40</code></td>
      <td><code>scroll-margin-bottom: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-40</code></td>
      <td><code>scroll-margin-left: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-48</code></td>
      <td><code>scroll-margin-top: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-48</code></td>
      <td><code>scroll-margin-right: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-48</code></td>
      <td><code>scroll-margin-bottom: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-48</code></td>
      <td><code>scroll-margin-left: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-56</code></td>
      <td><code>scroll-margin-top: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-56</code></td>
      <td><code>scroll-margin-right: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-56</code></td>
      <td><code>scroll-margin-bottom: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-56</code></td>
      <td><code>scroll-margin-left: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-64</code></td>
      <td><code>scroll-margin-top: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-64</code></td>
      <td><code>scroll-margin-right: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-64</code></td>
      <td><code>scroll-margin-bottom: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-64</code></td>
      <td><code>scroll-margin-left: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-auto</code></td>
      <td><code>scroll-margin-top: auto;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-auto</code></td>
      <td><code>scroll-margin-right: auto;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-auto</code></td>
      <td><code>scroll-margin-bottom: auto;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-auto</code></td>
      <td><code>scroll-margin-left: auto;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mt-px</code></td>
      <td><code>scroll-margin-top: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mr-px</code></td>
      <td><code>scroll-margin-right: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-mb-px</code></td>
      <td><code>scroll-margin-bottom: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-ml-px</code></td>
      <td><code>scroll-margin-left: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-1</code></td>
      <td><code>scroll-margin-top: -0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-1</code></td>
      <td><code>scroll-margin-right: -0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-1</code></td>
      <td><code>scroll-margin-bottom: -0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-1</code></td>
      <td><code>scroll-margin-left: -0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-2</code></td>
      <td><code>scroll-margin-top: -0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-2</code></td>
      <td><code>scroll-margin-right: -0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-2</code></td>
      <td><code>scroll-margin-bottom: -0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-2</code></td>
      <td><code>scroll-margin-left: -0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-3</code></td>
      <td><code>scroll-margin-top: -0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-3</code></td>
      <td><code>scroll-margin-right: -0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-3</code></td>
      <td><code>scroll-margin-bottom: -0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-3</code></td>
      <td><code>scroll-margin-left: -0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-4</code></td>
      <td><code>scroll-margin-top: -1rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-4</code></td>
      <td><code>scroll-margin-right: -1rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-4</code></td>
      <td><code>scroll-margin-bottom: -1rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-4</code></td>
      <td><code>scroll-margin-left: -1rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-5</code></td>
      <td><code>scroll-margin-top: -1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-5</code></td>
      <td><code>scroll-margin-right: -1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-5</code></td>
      <td><code>scroll-margin-bottom: -1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-5</code></td>
      <td><code>scroll-margin-left: -1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-6</code></td>
      <td><code>scroll-margin-top: -1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-6</code></td>
      <td><code>scroll-margin-right: -1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-6</code></td>
      <td><code>scroll-margin-bottom: -1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-6</code></td>
      <td><code>scroll-margin-left: -1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-8</code></td>
      <td><code>scroll-margin-top: -2rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-8</code></td>
      <td><code>scroll-margin-right: -2rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-8</code></td>
      <td><code>scroll-margin-bottom: -2rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-8</code></td>
      <td><code>scroll-margin-left: -2rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-10</code></td>
      <td><code>scroll-margin-top: -2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-10</code></td>
      <td><code>scroll-margin-right: -2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-10</code></td>
      <td><code>scroll-margin-bottom: -2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-10</code></td>
      <td><code>scroll-margin-left: -2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-12</code></td>
      <td><code>scroll-margin-top: -3rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-12</code></td>
      <td><code>scroll-margin-right: -3rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-12</code></td>
      <td><code>scroll-margin-bottom: -3rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-12</code></td>
      <td><code>scroll-margin-left: -3rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-16</code></td>
      <td><code>scroll-margin-top: -4rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-16</code></td>
      <td><code>scroll-margin-right: -4rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-16</code></td>
      <td><code>scroll-margin-bottom: -4rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-16</code></td>
      <td><code>scroll-margin-left: -4rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-20</code></td>
      <td><code>scroll-margin-top: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-20</code></td>
      <td><code>scroll-margin-right: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-20</code></td>
      <td><code>scroll-margin-bottom: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-20</code></td>
      <td><code>scroll-margin-left: -5rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-24</code></td>
      <td><code>scroll-margin-top: -6rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-24</code></td>
      <td><code>scroll-margin-right: -6rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-24</code></td>
      <td><code>scroll-margin-bottom: -6rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-24</code></td>
      <td><code>scroll-margin-left: -6rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-32</code></td>
      <td><code>scroll-margin-top: -8rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-32</code></td>
      <td><code>scroll-margin-right: -8rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-32</code></td>
      <td><code>scroll-margin-bottom: -8rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-32</code></td>
      <td><code>scroll-margin-left: -8rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-40</code></td>
      <td><code>scroll-margin-top: -10rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-40</code></td>
      <td><code>scroll-margin-right: -10rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-40</code></td>
      <td><code>scroll-margin-bottom: -10rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-40</code></td>
      <td><code>scroll-margin-left: -10rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-48</code></td>
      <td><code>scroll-margin-top: -12rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-48</code></td>
      <td><code>scroll-margin-right: -12rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-48</code></td>
      <td><code>scroll-margin-bottom: -12rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-48</code></td>
      <td><code>scroll-margin-left: -12rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-56</code></td>
      <td><code>scroll-margin-top: -14rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-56</code></td>
      <td><code>scroll-margin-right: -14rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-56</code></td>
      <td><code>scroll-margin-bottom: -14rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-56</code></td>
      <td><code>scroll-margin-left: -14rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-64</code></td>
      <td><code>scroll-margin-top: -16rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-64</code></td>
      <td><code>scroll-margin-right: -16rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-64</code></td>
      <td><code>scroll-margin-bottom: -16rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-64</code></td>
      <td><code>scroll-margin-left: -16rem;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mt-px</code></td>
      <td><code>scroll-margin-top: -1px;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mr-px</code></td>
      <td><code>scroll-margin-right: -1px;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-mb-px</code></td>
      <td><code>scroll-margin-bottom: -1px;</code></td>
    </tr>
    <tr>
      <td><code>.-snap-ml-px</code></td>
      <td><code>scroll-margin-left: -1px ;</code></td>
    </tr>
  </tbody>
</table>
</details>

The default values are inherited from your theme's spacing values, negative values included, just like [`margin`](https://tailwindcss.com/docs/margin).

Also like `margin`, you can override them your Tailwind theme configuration under the `scrollMargin` key.

## Padding

Utilities for the [`scroll-padding`](https://developer.mozilla.org/docs/Web/CSS/scroll-padding) property.

<details>
<summary>See the default list.</summary>
<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Property</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.snap-p-0</code></td>
      <td><code>scroll-padding: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-1</code></td>
      <td><code>scroll-padding: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-2</code></td>
      <td><code>scroll-padding: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-3</code></td>
      <td><code>scroll-padding: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-4</code></td>
      <td><code>scroll-padding: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-5</code></td>
      <td><code>scroll-padding: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-6</code></td>
      <td><code>scroll-padding: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-8</code></td>
      <td><code>scroll-padding: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-10</code></td>
      <td><code>scroll-padding: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-12</code></td>
      <td><code>scroll-padding: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-16</code></td>
      <td><code>scroll-padding: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-20</code></td>
      <td><code>scroll-padding: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-24</code></td>
      <td><code>scroll-padding: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-32</code></td>
      <td><code>scroll-padding: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-40</code></td>
      <td><code>scroll-padding: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-48</code></td>
      <td><code>scroll-padding: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-56</code></td>
      <td><code>scroll-padding: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-64</code></td>
      <td><code>scroll-padding: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-p-px</code></td>
      <td><code>scroll-padding: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-0</code></td>
      <td><code>scroll-padding-top: 0; scroll-padding-bottom: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-0</code></td>
      <td><code>scroll-padding-left: 0; scroll-padding-right: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-1</code></td>
      <td><code>scroll-padding-top: 0.25rem; scroll-padding-bottom: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-1</code></td>
      <td><code>scroll-padding-left: 0.25rem; scroll-padding-right: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-2</code></td>
      <td><code>scroll-padding-top: 0.5rem; scroll-padding-bottom: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-2</code></td>
      <td><code>scroll-padding-left: 0.5rem; scroll-padding-right: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-3</code></td>
      <td><code>scroll-padding-top: 0.75rem; scroll-padding-bottom: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-3</code></td>
      <td><code>scroll-padding-left: 0.75rem; scroll-padding-right: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-4</code></td>
      <td><code>scroll-padding-top: 1rem; scroll-padding-bottom: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-4</code></td>
      <td><code>scroll-padding-left: 1rem; scroll-padding-right: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-5</code></td>
      <td><code>scroll-padding-top: 1.25rem; scroll-padding-bottom: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-5</code></td>
      <td><code>scroll-padding-left: 1.25rem; scroll-padding-right: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-6</code></td>
      <td><code>scroll-padding-top: 1.5rem; scroll-padding-bottom: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-6</code></td>
      <td><code>scroll-padding-left: 1.5rem; scroll-padding-right: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-8</code></td>
      <td><code>scroll-padding-top: 2rem; scroll-padding-bottom: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-8</code></td>
      <td><code>scroll-padding-left: 2rem; scroll-padding-right: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-10</code></td>
      <td><code>scroll-padding-top: 2.5rem; scroll-padding-bottom: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-10</code></td>
      <td><code>scroll-padding-left: 2.5rem; scroll-padding-right: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-12</code></td>
      <td><code>scroll-padding-top: 3rem; scroll-padding-bottom: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-12</code></td>
      <td><code>scroll-padding-left: 3rem; scroll-padding-right: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-16</code></td>
      <td><code>scroll-padding-top: 4rem; scroll-padding-bottom: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-16</code></td>
      <td><code>scroll-padding-left: 4rem; scroll-padding-right: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-20</code></td>
      <td><code>scroll-padding-top: 5rem; scroll-padding-bottom: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-20</code></td>
      <td><code>scroll-padding-left: 5rem; scroll-padding-right: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-24</code></td>
      <td><code>scroll-padding-top: 6rem; scroll-padding-bottom: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-24</code></td>
      <td><code>scroll-padding-left: 6rem; scroll-padding-right: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-32</code></td>
      <td><code>scroll-padding-top: 8rem; scroll-padding-bottom: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-32</code></td>
      <td><code>scroll-padding-left: 8rem; scroll-padding-right: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-40</code></td>
      <td><code>scroll-padding-top: 10rem; scroll-padding-bottom: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-40</code></td>
      <td><code>scroll-padding-left: 10rem; scroll-padding-right: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-48</code></td>
      <td><code>scroll-padding-top: 12rem; scroll-padding-bottom: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-48</code></td>
      <td><code>scroll-padding-left: 12rem; scroll-padding-right: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-56</code></td>
      <td><code>scroll-padding-top: 14rem; scroll-padding-bottom: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-56</code></td>
      <td><code>scroll-padding-left: 14rem; scroll-padding-right: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-64</code></td>
      <td><code>scroll-padding-top: 16rem; scroll-padding-bottom: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-64</code></td>
      <td><code>scroll-padding-left: 16rem; scroll-padding-right: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-py-px</code></td>
      <td><code>scroll-padding-top: 1px; scroll-padding-bottom: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-px-px</code></td>
      <td><code>scroll-padding-left: 1px; scroll-padding-right: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-0</code></td>
      <td><code>scroll-padding-top: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-0</code></td>
      <td><code>scroll-padding-right: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-0</code></td>
      <td><code>scroll-padding-bottom: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-0</code></td>
      <td><code>scroll-padding-left: 0;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-1</code></td>
      <td><code>scroll-padding-top: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-1</code></td>
      <td><code>scroll-padding-right: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-1</code></td>
      <td><code>scroll-padding-bottom: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-1</code></td>
      <td><code>scroll-padding-left: 0.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-2</code></td>
      <td><code>scroll-padding-top: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-2</code></td>
      <td><code>scroll-padding-right: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-2</code></td>
      <td><code>scroll-padding-bottom: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-2</code></td>
      <td><code>scroll-padding-left: 0.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-3</code></td>
      <td><code>scroll-padding-top: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-3</code></td>
      <td><code>scroll-padding-right: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-3</code></td>
      <td><code>scroll-padding-bottom: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-3</code></td>
      <td><code>scroll-padding-left: 0.75rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-4</code></td>
      <td><code>scroll-padding-top: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-4</code></td>
      <td><code>scroll-padding-right: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-4</code></td>
      <td><code>scroll-padding-bottom: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-4</code></td>
      <td><code>scroll-padding-left: 1rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-5</code></td>
      <td><code>scroll-padding-top: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-5</code></td>
      <td><code>scroll-padding-right: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-5</code></td>
      <td><code>scroll-padding-bottom: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-5</code></td>
      <td><code>scroll-padding-left: 1.25rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-6</code></td>
      <td><code>scroll-padding-top: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-6</code></td>
      <td><code>scroll-padding-right: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-6</code></td>
      <td><code>scroll-padding-bottom: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-6</code></td>
      <td><code>scroll-padding-left: 1.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-8</code></td>
      <td><code>scroll-padding-top: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-8</code></td>
      <td><code>scroll-padding-right: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-8</code></td>
      <td><code>scroll-padding-bottom: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-8</code></td>
      <td><code>scroll-padding-left: 2rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-10</code></td>
      <td><code>scroll-padding-top: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-10</code></td>
      <td><code>scroll-padding-right: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-10</code></td>
      <td><code>scroll-padding-bottom: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-10</code></td>
      <td><code>scroll-padding-left: 2.5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-12</code></td>
      <td><code>scroll-padding-top: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-12</code></td>
      <td><code>scroll-padding-right: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-12</code></td>
      <td><code>scroll-padding-bottom: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-12</code></td>
      <td><code>scroll-padding-left: 3rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-16</code></td>
      <td><code>scroll-padding-top: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-16</code></td>
      <td><code>scroll-padding-right: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-16</code></td>
      <td><code>scroll-padding-bottom: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-16</code></td>
      <td><code>scroll-padding-left: 4rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-20</code></td>
      <td><code>scroll-padding-top: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-20</code></td>
      <td><code>scroll-padding-right: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-20</code></td>
      <td><code>scroll-padding-bottom: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-20</code></td>
      <td><code>scroll-padding-left: 5rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-24</code></td>
      <td><code>scroll-padding-top: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-24</code></td>
      <td><code>scroll-padding-right: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-24</code></td>
      <td><code>scroll-padding-bottom: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-24</code></td>
      <td><code>scroll-padding-left: 6rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-32</code></td>
      <td><code>scroll-padding-top: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-32</code></td>
      <td><code>scroll-padding-right: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-32</code></td>
      <td><code>scroll-padding-bottom: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-32</code></td>
      <td><code>scroll-padding-left: 8rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-40</code></td>
      <td><code>scroll-padding-top: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-40</code></td>
      <td><code>scroll-padding-right: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-40</code></td>
      <td><code>scroll-padding-bottom: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-40</code></td>
      <td><code>scroll-padding-left: 10rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-48</code></td>
      <td><code>scroll-padding-top: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-48</code></td>
      <td><code>scroll-padding-right: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-48</code></td>
      <td><code>scroll-padding-bottom: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-48</code></td>
      <td><code>scroll-padding-left: 12rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-56</code></td>
      <td><code>scroll-padding-top: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-56</code></td>
      <td><code>scroll-padding-right: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-56</code></td>
      <td><code>scroll-padding-bottom: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-56</code></td>
      <td><code>scroll-padding-left: 14rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-64</code></td>
      <td><code>scroll-padding-top: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-64</code></td>
      <td><code>scroll-padding-right: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-64</code></td>
      <td><code>scroll-padding-bottom: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-64</code></td>
      <td><code>scroll-padding-left: 16rem;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pt-px</code></td>
      <td><code>scroll-padding-top: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pr-px</code></td>
      <td><code>scroll-padding-right: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pb-px</code></td>
      <td><code>scroll-padding-bottom: 1px;</code></td>
    </tr>
    <tr>
      <td><code>.snap-pl-px</code></td>
      <td><code>scroll-padding-left: 1px ;</code></td>
    </tr>
  </tbody>
</table>

</details>

The default values are inherited from your theme's spacing values, negative values included, just like [`padding`](https://tailwindcss.com/docs/padding).

Also like `padding`, you can override them your Tailwind theme configuration under the `scrollPadding` key.

# Compatibility

Please note that IE11 [doesn't support CSS custom properties](https://caniuse.com/#feat=css-variables). If you have to support IE11, please override the `scroll-snap-type` utilities.
