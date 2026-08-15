
export const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="ml-70 mt-16 min-h-[calc(100vh-64px)] content-start gap-lg p-container-margin relative">
            <div className="max-w-[1900px] flex flex-col gap-10">
                {children}
            </div>
        </main>
    )
}   