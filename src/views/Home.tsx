import { FC, useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { pageSelector } from "../redux/entities/page/page.slice";
import { PageProps } from '../models/page';
import { stopLoading } from "../redux/entities/page/page.slice"
import { Navbar } from "@components/Navbar";

export const HomePage: FC<PageProps> = props => {

    const pageState = useAppSelector(pageSelector);

    const handleButtonClick = () =>
        props.changePage("/about")

    useEffect(() => {
        props.changeState(stopLoading)
    }, [props])


    return (
        <>
            <Navbar />
            {
                !pageState.loading && (
                    <h1>
                        Home page
                    </h1>
                )
            }
            <button onClick={handleButtonClick}>
                home page
            </button>
        </>
    )
}


