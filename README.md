# @vanilla/uuidv5
ESNext edition of uuidV5 from https://github.com/uuidjs/uuid

## requirements
- [Secure contexts](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts)
- [Compatible browser](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#browser_compatibility)

## installation
```
npm install git+https://github.com/VanillaMaster/uuidv5.git
```

## example
```js
import generateUUID, { NameSpace_URL } from "@vanilla/uuidv5";

const encoder = new TextEncoder();
const data = encoder.encode("https://example.com/");
const uuid = await generateUUID(data, NameSpace_URL);
```