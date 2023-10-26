import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "widgets/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { SideBar } from "widgets/SideBar";

const App = (): JSX.Element => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Suspense fallback=''>
                <div className='content-page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
