import SignedOutRedirect from './SignedOutRedirect'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return <SignedOutRedirect>{children}</SignedOutRedirect>
}