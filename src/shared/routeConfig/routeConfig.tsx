import { DummyTables } from "components";
import { PageNotFound } from "pages/PageNotFound";
import { type RouteProps } from "react-router-dom";
import { DummyChartPage, DummyListPage, DummyTablePage } from "pages";

export enum AppRoutes {
    MAIN = "main",
    NOT_FOUND = "not_found",
    DUMMY_CHART = "dummyChart",
    DUMMY_LIST = "dummyList",
    DUMMY_TABLE = "dummyTable",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.NOT_FOUND]: "*",
    [AppRoutes.DUMMY_CHART]: "/dummyChart",
    [AppRoutes.DUMMY_LIST]: "/dummyList",
    [AppRoutes.DUMMY_TABLE]: "/dummyTable",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <DummyTables />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <PageNotFound />,
    },
    [AppRoutes.DUMMY_CHART]: {
        path: RoutePath.dummyChart,
        element: <DummyChartPage />,
    },
    [AppRoutes.DUMMY_LIST]: {
        path: RoutePath.dummyList,
        element: <DummyListPage />,
    },
    [AppRoutes.DUMMY_TABLE]: {
        path: RoutePath.dummyTable,
        element: <DummyTablePage />,
    },
};
