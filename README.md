[Flow] + [Babel] = Love
========
Use javascript in modern and safe way **Right Now**.

```shell
# Requires node ≥ 5.0.0

# Install dependencies
npm install

# Build everything in watch mode (babel)
npm start

# Type checking (flow)
npm test

# Build everything in production mode (flow + babel)
npm run build
```

### Wow
```javascript
// main.js

var hello = (): string => {
  return 'Hello, world';
};

export { hello };
```

[Flow]: http://flowtype.org
[Babel]: https://babeljs.io/
