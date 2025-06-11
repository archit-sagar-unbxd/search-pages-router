
export const onEvent = ({ type, message, value, state }: {
    type: string, message: string, value: Record<string, unknown>, state: Record<string, unknown>
}) => {
    if (message)
        console.log(`${type}:`, message)
    else console.log(type)
}

export const setWebUrl = (newUrl: string = "", redirect: boolean = false, replace: boolean = false) => {
    if (replace) {
        window.history.replaceState(null, "", newUrl)
    }
    else window.history.pushState({}, "", newUrl);

}