"use client";

import { useHeaderStore } from "@/store/headerStore";
import { MemoizedHeader } from "./header";

export const Header = () => {
    const isHeaderVisible = useHeaderStore((state) => state.isHeaderVisible);

    return isHeaderVisible ? <MemoizedHeader /> : null;
};