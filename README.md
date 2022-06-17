# Bad Game Recommender
BGR is an application that provides bad video game fans with bad video game recommendations.

## Installation
### Native & Web
```
npm install
```

### Native (from root directory)
```
cd ios
pod install
```

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
Due to the strict rate limit imposed by IGDB, there is an intentional 2 second delay between requests so as not to exceed the rate limit/crash the app.

## Sister Repo
This app gets its data from the IGDB API, run through a proxy server that can be found here: [BGR Proxy](https://github.com/DominicMonares/bgr-proxy)
