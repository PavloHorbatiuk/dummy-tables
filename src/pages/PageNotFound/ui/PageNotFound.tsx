import { useTranslation } from "react-i18next";
import cls from "./PageNotFound.module.scss";
import { classNames } from "widgets/lib/classNames/classNames";

interface IProps {
    className?: string;
}
const PageNotFound: React.FC<IProps> = ({ className }): JSX.Element => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.PageNotFound, {}, [className ?? ""])}>
            {t("Page not found")}
        </div>
    );
};

export default PageNotFound;
