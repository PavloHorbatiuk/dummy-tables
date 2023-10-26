import { useState } from "react";
import { classNames } from "widgets/lib/classNames/classNames";
import cls from "./SideBar.module.scss";
import { DummyTables } from "components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface SidebarProps {
    className?: string;
}

export const SideBar = ({ className }: SidebarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onToggle = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className ?? "",
            ])}
        >
            <button className={cls.collapsedBnt} onClick={onToggle}>
                {collapsed ? <ArrowForwardIcon /> : <ArrowBackIcon />}
            </button>

            <div>
                <DummyTables />
            </div>
        </div>
    );
};
