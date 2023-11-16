import stringify from "./stringify.js";

/**
 * NameSpace_URL
 * 
 * [UUID RFC](https://www.rfc-editor.org/rfc/rfc4122)
 */
export const url = new Uint8Array([107, 167, 184, 17, 157, 173, 17, 209, 128, 180, 0, 192, 79, 212, 48, 200]);

/**
 * uuid V5
 * [UUID RFC](https://www.rfc-editor.org/rfc/rfc4122)
 */
export default async function v5(value: Uint8Array, namespace: Uint8Array): Promise<uuid> {
    const bytes = new Uint8Array(value.byteLength + namespace.byteLength);
    bytes.set(namespace);
    bytes.set(value, namespace.length);

    const hash = new Uint8Array(await crypto.subtle.digest("SHA-1", bytes));
    
    hash[6] = (bytes[6] & 0x0f) | 0x50;
    hash[8] = (bytes[8] & 0x3f) | 0x80;

    return stringify(new Uint8Array(hash));
}