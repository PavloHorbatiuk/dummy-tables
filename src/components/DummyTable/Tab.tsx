import { Suspense, lazy } from "react";
interface IProps {
    tabId: string;
}
function Tab({ tabId }: IProps): JSX.Element {
    const LazyTabContent = lazy(async () => await import(`./tabs/${tabId}`));
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyTabContent />
        </Suspense>
    );
}

export default Tab;
