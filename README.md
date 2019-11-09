# solution

Solution was gracefully provided by [@fatso83](https://github.com/fatso83) in answer to my ticket: https://github.com/sinonjs/sinon/issues/2155

The problem is with there being both global and window, due to JSDOM usage in this setup. Creating fake timers as:
```js
const now = new Date();
const clock = sinon.useFakeTimers({ target: global, now });
```
solves the issue.


# fake-timers-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
