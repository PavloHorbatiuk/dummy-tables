import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
// component for testig ErrorBoundary
export const BugButton = (): JSX.Element => {
    const [error, setError] = useState(false);

    const onTrhow = (): void => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <div>
            <Button variant='outlined' onClick={onTrhow}>
                thow error
            </Button>
        </div>
    );
};
