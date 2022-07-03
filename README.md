# Bad Game Recommender
BGR is an application that provides fans of bad video games with bad video game recommendations.

This app gets its data from the [IGDB API](https://api-docs.igdb.com/#about), run through a proxy server that can be found here: [BGR Proxy](https://github.com/DominicMonares/bgr-proxy)

## Installation
```
npm install
npx pod-install
```

## Usage
### Native
```
npm run native:start
```

### Web
```
npm run web:start
```

### Rate Limit Note
Due to the strict rate limit imposed by IGDB, there is an intentional 2 second delay between requests so as not to exceed the rate limit.
