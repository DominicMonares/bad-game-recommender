# Bad Game Recommender
BGR is an application that provides fans of bad video games with bad video game recommendations.

## Installation
```
npm install
npx pod-install
```

## Proxy Server
This app gets its data from the IGDB API, run through a proxy server that can be found here: [BGR Proxy](https://github.com/DominicMonares/bgr-proxy)

**The server is currently deployed and setup is not required for this app to work**

## Usage
### Native
```
npm run native:start
npm run ios
```

### Web
```
npm run web:start
```

### Rate Limit Note
Due to the strict rate limit imposed by IGDB, there is an intentional 2 second delay between requests so as not to exceed the rate limit.
