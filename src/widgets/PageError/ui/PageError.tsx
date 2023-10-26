import { classNames } from "widgets/lib/classNames/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps): JSX.Element => {
    const { t } = useTranslation();
    const reloadPage = (): void => {
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className ?? ""])}>
            <p>{t("Somthing went wrong")}</p>
            <Button variant='outlined' onClick={reloadPage}>
                {t("Reload page")}
            </Button>
        </div>
    );
};

export default PageError;
