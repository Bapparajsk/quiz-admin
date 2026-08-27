import { Show, UserButton } from "@clerk/nextjs";
import { memo } from "react";
import { NotificationsIcon } from "../icon/notifications";

const Header = () => {
    return (
        <header className="fixed right-0 top-0 z-40 ml-70 flex h-16 w-[calc(100%-280px)] items-center justify-between border-b border-outline-variant bg-surface px-gutter">
            <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Dashboard</h2>

            <div className="flex items-center gap-6">
                <span className="font-body-md text-body-md text-on-surface-variant">Welcome back, Admin</span>
                <button
                    type="button"
                    className="relative rounded-full p-2 text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-on-surface"
                    aria-label="Notifications"
                >
                    <NotificationsIcon />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-surface bg-primary-container" />
                </button>
                <Show when="signed-in">
                    <UserButton />
                </Show>
            </div>
        </header>
    )
}

const MemoizedHeader = memo(Header);
MemoizedHeader.displayName = "Header";

export { MemoizedHeader };
