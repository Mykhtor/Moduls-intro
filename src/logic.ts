//Logic

import { pupils, Pupil } from "./data.js";

export function search(name: string) : Pupil[] {

        if( name === ''){
            return pupils
        }

    let f = pupils.filter(p => p.name.toLowerCase() === name.toLowerCase())
    return f

}



