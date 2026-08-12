import { Avatar } from "@heroui/react"
import { NotificationsIcon } from "../icon/notifications"

export const Header = () => {
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
                <Avatar className="h-8 w-8 border border-outline-variant">
                    <Avatar.Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNkugvofLWTcaM8wIXt8zbpKAODInAi5Gj0kNOb2j_k3IuhLVwC7vRztCy1e4tGPk6-vDenqbBFJ7bphZ6CE5C7FldzcAN3hQAMByYVk8Kcmb0VT67z8xjy1lE8nmkgzwZ5_cDQc2XMRl1qPH_DIGQWk4Ge6yuyei862KTx2V20xyZ018n0OXjsqbGGhRJwcTZI5ID4S4b2aCtZD3rPED-wlQg8vakDrxJTCyiufhJiQAK50pHWi3yiw"
                        alt="Admin profile image"
                    />
                    <Avatar.Fallback>A</Avatar.Fallback>
                </Avatar>
            </div>
        </header>
    )
}