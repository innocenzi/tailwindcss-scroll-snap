<p align="center">
  <a href="#"><img alt="I'm not a designer leave me alone I know this banner suck" src="docs/assets/banner.png"></a>
  <br>
  <div align="center">
  <a href="https://github.com/hawezo/tailwindcss-scroll-snap/releases" target="_blank"><img alt="GitHub release (latest SemVer including pre-releases)" src="https://img.shields.io/github/v/release/hawezo/tailwindcss-scroll-snap?include_prereleases&style=flat-square"></a>
  <a href="https://npmjs.com/package/tailwindcss-scroll-snap" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/tailwindcss-scroll-snap?style=flat-square"></a>
  <a href="https://npmjs.com/package/tailwindcss-scroll-snap" target="_blank"><img alt="npm" src="https://img.shields.io/npm/dt/tailwindcss-scroll-snap?style=flat-square"></a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/tailwindcss-scroll-snap?style=flat-square">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/hawezo/tailwindcss-scroll-snap?style=flat-square">
  </div>
  <br>
</p>



# Introduction

> **Note** - This plugin works only with [**Tailwind CSS v1.2-canary**](https://github.com/tailwindcss/tailwindcss/tree/v1.2.0-canary.1). You can install `tailwindcss@canary` with NPM. 
> There is an unmaintained version of this plugin available for Tailwind CSS v1.1. Check out the [`tailwind-1.1`](https://github.com/hawezo/tailwindcss-theming/tree/tailwind-1.1) branch.

`tailwindcss-theming` is a Tailwind plugin made to solve the common need to have multiple themes in an application. 

It uses [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) in order to make your themes changeable on the client-side. Swapping themes is as simple as changing the class of your `body` or `html` element. 

Moreover, this plugin fully supports the [`prefers-color-scheme`](https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-color-scheme) media query, so you can setup a theme that will be automatically picked based on browser preferences.

**Get started:**

```console
$ yarn add tailwindcss-scroll-snap --dev
```


# Compatibility

Please note that IE11 [doesn't support CSS custom properties](https://caniuse.com/#feat=css-variables). You can still have partial support for IE11 by using the [PostCSS custom properties plugin](https://github.com/postcss/postcss-custom-properties). 

You won't be able to change theme at runtime, but at least your main and  theme will work flawlessly.

<p align="center">
    <br />
    •
    <br />
    <br />
    <img src="docs/assets/example.gif" alt="Example of what you can do with this plugin" />
    <i>A dark/light mode switch example - see <a href="docs/examples.md#application">here</a>.</i>
</p>
