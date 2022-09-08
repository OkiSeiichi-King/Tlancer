import { usePage } from '@inertiajs/inertia-react'

export function Trans(verb) {
    const { auth } = usePage().props
    if(auth.locale==="ka"){
        return auth.language[verb];
    }else{
        return verb
    }
}
