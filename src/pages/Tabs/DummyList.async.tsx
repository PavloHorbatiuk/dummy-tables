import { lazy } from "react";

export const DummyListPage = lazy(async () => await import("./DummyList"));
