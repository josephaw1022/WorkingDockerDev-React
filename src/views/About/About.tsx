import { FC } from "react"
import { PageProps } from "../../models/page"

export const AboutPage: FC<PageProps> = props => {

    const handleButtonClick = () => props.changePage("/")
    
    return (
        <>
            <h1>
                About page
            </h1>
            <button onClick={handleButtonClick}>
                go back home
            </button>
        </>
    )
}


