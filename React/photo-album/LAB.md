# Photo Album

Create a photo album site.

1. Create a webpack configuration file
1. Create a `Header` component
1. Create a `Footer` component
1. Create a `Photo` component
1. Create a `Photos` component
1. Create a `PhotoAlbum` component
1. Create an `App` component

## Modules

### Dev

Use `npm i -D` to install

* webpack
* webpack-cli
* prop-types
* @babel/core
* @babel/preset-env
* @babel/preset-react
* autoprefixer
* babel-loader
* css-loader
* eslint
* eslint-plugin-babel
* eslint-plugin-react
* file-loader
* html-webpack-plugin
* postcss-loader
* postcss-nested
* style-loader
* url-loader
* webpack-dev-server

### Production

Use `npm i` to install

* react
* react-dom

## Webpack

Your webpack configuration needs to specify an `entry`, `output`, `devtool`, and start a `devServer`.
It should use the following `plugins`: `html-webpack-plugin` and the `clean-webpack-plugin`.
It should specify the following `rules`:

* `js` uses `babel-loader` with the `@babel/preset-env` and `@babel/preset-react`
* `css` uses `style-loader`, `css-loader`, and `postcss-loader` with the `autoprefixer` and `postcss-nested` plugins
* `images` uses `url-loader`

## Header

Your header should have contain the name of your photo album site

## Footer
Your footer should contain your name

## Photo

The `Photo` component should take a url to a photo and display it.

## Photos

The `Photos` component should take an array of urls and create a list of photos
using ul/li and the `Photo` component

## PhotoAlbum

The `PhotoAlbum` component should take a title and an array of urls. It should
display the title of the album and the array of urls using the `Photos` component.

## App

Pull all components together in App.
