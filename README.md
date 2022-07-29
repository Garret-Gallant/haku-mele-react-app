# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

Data format for our db: 
```json
{
          "id": 1,
          "name": "",
          "artist": "",
          "album": "",
          "genre": "",
          "subGenre": "",
          "albumPic": "",
          "youtube": "",
          "spotify": ""
        },
        {
          "id": 2,
          "name": "",
          "artist": "",
          "album": "",
          "genre": "",
          "subGenre": "",
          "albumPic": "",
          "youtube": "",
          "spotify": ""
        }
```

{
  "Jazz": [
    {
      "id": 1,
      "name": "Cheek to Cheek",
      "artist": "Tony Bennett and Lady Gaga",
      "album": "Cheek to Cheek",
      "subGenre": false,
      "albumPic": "https://upload.wikimedia.org/wikipedia/en/e/e3/Tony_Bennett_and_Lady_Gaga_-_Cheek_to_Cheek.png",
      "youtube": "https://www.youtube.com/watch?v=G46O8YiLHXI",
      "spotify": "https://open.spotify.com/track/0UuRIovHyU6KeTzY4gS0L2?si=0847fcd047a14063"
    },
    {
      "id": 2,
      "name": "Fever",
      "artist": "Peggy Lee",
      "album": "Cheek to Cheek",
      "subGenre": false,
      "albumPic": "https://m.media-amazon.com/images/I/71LHmKpohxL._SS500_.jpg",
      "youtube": "https://www.youtube.com/watch?v=REryc1TpeY8",
      "spotify": "https://open.spotify.com/track/3aPlQWU07jGgyHaBHVS5TS?si=8d2db650cc4140d8"
    }
  ],
  "Metal": [
    {
      "id": 1,
      "name": "Blackbear",
      "artist": "Whitechapel",
      "album": "The Valley",
      "subGenre": "Deathcore",
      "albumPic": "https://m.media-amazon.com/images/I/71zRyp9l0aL._SL1200_.jpg",
      "youtube": "https://www.youtube.com/watch?v=X7pvYfWD1P0",
      "spotify": "https://open.spotify.com/track/1K2AsxGzMyms8ft8m62jVd"
    },
    {
      "id": 2,
      "name": "27",
      "artist": "Make Them Suffer",
      "album": "Single Track",
      "subGenre": "Melodic Deathcore",
      "albumPic": "https://images.genius.com/1fba2ad360e5d7b72ed77bcd8324049a.640x640x1.jpg",
      "youtube": "https://www.youtube.com/watch?v=by2p155voaU",
      "spotify": "https://open.spotify.com/track/3a4vinxBf5uT8Sb8wCoFz9?si=cbb930b98aa146e6"
    }
  ],
  "Oldies": [
    {
      "id": 1,
      "name": "Captain Crash & The Beauty Queen From Mars",
      "artist": "Bon Jovi",
      "album": "Crush",
      "subGenre": false,
      "albumPic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmm7SF4WJ9gJxsWkemGWta5FKVtrKzWsgxA&usqp=CAU",
      "youtube": "https://www.youtube.com/watch?v=Yk6HWa4opnQ",
      "spotify": "https://open.spotify.com/track/2svCszTLVUf8K6woN74Svl?si=ee48d7752616491e"
    },
    {
      "id": 2,
      "name": "Lovin', Touchin', Squeezin'",
      "artist": "Journey",
      "album": "Evolution",
      "subGenre": false,
      "albumPic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PEAaTRKU-x2jFid4qbnBpXXl6xDMx_lhuA&usqp=CAU",
      "youtube": "https://www.youtube.com/watch?v=fTkHFQC3wow",
      "spotify": "https://open.spotify.com/track/0VQ0n5gMgJLNixG8BfWBT5?si=28469750ae0a498a"
    }
  ],
  "LoFi": [
    {
      "id": 1,
      "name": "A Day Off",
      "artist": "Nishnu",
      "album": "DAYDREAMING",
      "subGenre": false,
      "albumPic": "https://i.scdn.co/image/ab67616d0000b273c1b158e04750ee3956e20854",
      "youtube": false,
      "spotify": "https://open.spotify.com/track/51FLSS3BNosbOEtz5tst6f?si=e2305628dd16413d"
    },
    {
      "id": 2,
      "name": "Evergarden",
      "artist": "Osaki",
      "album": "Evergarden",
      "subGenre": false,
      "albumPic": "https://f4.bcbits.com/img/a2764338842_10.jpg",
      "youtube": "https://www.youtube.com/watch?v=d7L-clHMr40",
      "spotify": "https://open.spotify.com/track/67F80H5WZRteT0DNj5VcDO?si=f63a03584d834a53"
    }
  ],
  "Genre": [
    {
      "id": 1,
      "name": "",
      "artist": "",
      "album": "",
      "subGenre": "",
      "albumPic": "",
      "youtube": "",
      "spotify": ""
    },
    {
      "id": 2,
      "name": "",
      "artist": "",
      "album": "",
      "subGenre": "",
      "albumPic": "",
      "youtube": "",
      "spotify": ""
    }
  ],
  "NextGenre": [
    {
      "id": 1,
      "name": "",
      "artist": "",
      "album": "",
      "subGenre": "",
      "albumPic": "",
      "youtube": "",
      "spotify": ""
    },
    {
      "id": 2,
      "name": "",
      "artist": "",
      "album": "",
      "subGenre": "",
      "albumPic": "",
      "youtube": "",
      "spotify": ""
    }
  ]
}