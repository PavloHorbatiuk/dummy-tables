import { useEffect, useState } from "react";
import { type TabType } from "./types";
import { Outlet, useNavigate } from "react-router-dom";
import { NavTabs } from "./NavTabs";
import { RoutePath } from "shared/routeConfig/routeConfig";

interface TableData {
    tables: TabType[];
}

function DummyTable(): JSX.Element {
    const [tabs, setTabs] = useState<TabType[]>([]);
    const navigate = useNavigate();

    const fetchDataTable = async (): Promise<void> => {
        try {
            const data: TableData = await import("./../../../tabs.json");
            const tables = data.tables;
            setTabs(tables);
            navigate(RoutePath.dummyTable);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        void fetchDataTable();
    }, []);

    return (
        <div>
            {tabs.length ? <NavTabs tabs={tabs} /> : <p>Loading...</p>}
            <Outlet />
        </div>
    );
}

export default DummyTable;
