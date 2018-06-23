# [React Reduction - Free Admin Template Built with React and Bootstrap4](https://reduction-admin.github.io/react-reduction/)

![alt text](public/img/screenshots/reduction-admin.jpg?raw=true 'React Reduction')

## Preview

You can check out [live preview](https://reduction-admin.github.io/react-reduction/).

## Quick Start

1.  Clone the repo `git clone https://github.com/reduction-admin/react-reduction.git`
2.  Go to your project folder from your terminal
3.  Run: `npm install` or `yarn install`
4.  After install, run: `npm run start` or `yarn start`
5.  It will open your browser(http://localhost:3000)

## Note

React Reduction is built on top of [Create React App](https://github.com/facebook/create-react-app), which means all features that create-react-app supports are available.

To enable basic Google Analytics page tracking, you can add "REACT_APP_GOOGLE_ANALYTICS" variable in .env(or create env.production) file. For example, `REACT_APP_GOOGLE_ANALYTICS=xxxxxx` like this.

## Folder Structure

Top level folder structure is based on [create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#folder-structure)

Under `src` folder will be explained below:

### `assets`

It includes images and sample json data. It might be strange assets(images etc.) is located in `src` folder. However, in order to import images from javascript files, it should be under `src`. See [the reason](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-images-fonts-and-files)

### `demos`

It includes sample data such as chart, card, dashboard and etc data.

### `components`

It includes react components. For now, this folder is mixed with component files(.js) and folder(Card, Layout, Widget). It might be changed into each folder structure later on,
because it confuses users to understand `component` folder structure.

### `hocs`

`hocs` stands for Higher Order Components. It includes reusable HOC.

### `pages`

It includes sample pages which are registered in router([react-router](https://reacttraining.com/react-router/)).

### `styles`

It includes SCSS/CSS files.

### `utils`

It includes files which is not part of components but is used in application level.
