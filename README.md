<p align="center">
    <br />
    <strong>Avatar Uploader</strong>
    <br />
    A React component to upload and crop avatars.
</p>
<p align="center">
    <img alt="Language" src="https://img.shields.io/badge/language-TypeScript-blue" />
    <img alt="Build" src="https://img.shields.io/badge/build-passing-green" />
    <img alt="Coverage" src="https://img.shields.io/badge/coverage-100%25-green" />
    <img alt="Maintainability" src="https://img.shields.io/badge/maintainability-100-green" />
</p>

<p align="center">
  <a href="react-zoom.vercel.app"> You can acess the LIVE  version on the project here</a>
</p>

# Challenge

This challenge consists of creating a React component using Typescript to let users upload and crop avatars.

<br/>

<p align="center">
    <img src="https://svgshare.com/i/RBA.svg" alt="Croct" width="500"/>
</p>

## DEMO
- [croct-vercel](https://croct.vercel.app/)
## Requirements

The `<AvatarUpload />` component should allow users to upload images to make it easier for them to recognize key interface elements related to an organization.

- It should allow uploading an image by dragging it into the dashed area or clicking on it.
- Throughout the entire process, the user can click on the "X" icon to cancel and return to the initial state
- After upload, the user can adjust the image to better fit the circular format. Using a slider, the user can zoom in and out on the image cut out by the circular mask to preview the final result.
- Clicking on save, the component should display the cropped logo and a button to restart the process. It must also provide some way for parent components to access the resulting image's raw data.

We are very focused on code quality, so we expect you to include tests to ensure all requirements are covered.

Feel free to extract out subcomponents, like the slider, as you find necessary. You can also use open-source components available in the community – why reinvent the wheel, right? 😜

## Design

You can find the component's design [here](https://www.figma.com/file/aiiSV722MgNFBy0WqgfeQL/Challenges?node-id=1%3A19).

## Technologies

### Production techs

- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)

### Quality ensurance/documentation techs

- [Husky](https://typicode.github.io/husky/#/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [Commitzen](https://github.com/commitizen/cz-cli)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Testing Library](https://testing-library.com/)
- [Storybook](https://storybook.js.org/)

## Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/MarceloFullStack/croct.git && cd croct-tech
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn

# Start the client
$ yarn start
```

Great! Now you can see the project on your browser by acessing http://localhost:3000.

## Commands

- `start`: runs the main application at `localhost:3000`
- `build`: creates the production build version
- `storybook`: runs yarn run storybook the storybook project at `localhost:6006` 
- `build-storybook`: generates the build version of the storybook project
- `test`: executes all tests
- `test:watch`: executes all tests in --watch mode
- `commit`: runs commitzen to ensure that your commit messages are following the expected standarts

<p align="center">
   &lt;/&gt; with ❤️ by <a href="https://www.linkedin.com/in/marcelodeveloper/">Marcelo Guimarães</a>
</p>
