import { To } from "react-router-dom"

export type PageProps = {
    changePage: (page: To) => void,
    changeState: (func: CallableFunction) => void,
}
