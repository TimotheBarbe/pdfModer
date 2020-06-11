import {ChangeEvent} from "react";


export const setString = (setter: (data: string) => void) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(event.target.value)
}

export const setNumber = (setter: (data: number) => void) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(+event.target.value)
}