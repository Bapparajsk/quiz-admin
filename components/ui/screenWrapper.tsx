
export const ScreenWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="ml-70 mt-16 min-h-[calc(100vh-64px)] grid content-start gap-lg p-container-margin">
            <div className="max-w-[1900px]">
                {children}
            </div>
        </main>
    )
}   