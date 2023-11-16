# uuidV5
ESNext edition of uuidV5 from https://github.com/uuidjs/uuid

## requirements
- [Secure contexts](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts)

## installation
```
npm install git+https://github.com/VanillaMaster/uuidV5.git
```

## example
```js
import generateUUID, { NameSpace_URL } from "uuidv5";

const encoder = new TextEncoder();
const data = encoder.encode("https://example.com/");
const uuid = await generateUUID(data, NameSpace_URL);
```