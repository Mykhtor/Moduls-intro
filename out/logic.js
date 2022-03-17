//Logic
import { pupils } from "./data.js";
export function search(name) {
    if (name === '') {
        return pupils;
    }
    let f = pupils.filter(p => p.name.toLowerCase() === name.toLowerCase());
    return f;
}
