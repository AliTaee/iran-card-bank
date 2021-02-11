# Iran card bank 💳

Customizable Iran card bank.

## features

- Auto bank detection base on 6 first digits and show bank name
- Customize: background color or gradient, background image, border radius
- Showing error if bank number less or more than 16 digits

## List of props

- cardNumber \*(type number): To show user card number.
- fullSize (type boolean): If it's true then it get full width and height as parent
- background (type string): Customize background color, Also you can pass gradient 💅
- backgroundImage (type 'initial' | string): Customize background image 🖼️
- borderRadius (type string): Customize border radius

## Todo list:

- Add more unit test for all bank names (Currently working on this feature 👨‍💻🛠️)
- Flag to enable or disable bank name
- Position to show bank name
- Make related props one prop object for better developer experience
- Users can type their card number
- Project demo
- Customize texts
- Only Show first or last digits
- Show user card bank name and family
- Flag to enable or disable showing name and family
- Position for card number
- Position for name and family
- Error on Card numbers
- Improve document 📝
- Show custom background base on bank detection
- Add unit test for each feature
- Add story book
- Release this project as NPM package 📦

## How to contribute on this project? 🤔

- By suggestion cool features
- Develop one of todo list features or you own idea
- Improve code base, Clean code, Add more unit tests

Please, Tell us about what you are working so We can update readme
and others know what you are working on and they move to other features
or you can help others on their development. Create a branch with feature/ prefix
and start coding.

## Technologies

Project is created with:

- React
- Node-sass
- TypeScript

## Dev Tools

- Jest
- Husky
- Eslint
- Prettier
- Testing-library/react

## Build Setup

```bash
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
```
