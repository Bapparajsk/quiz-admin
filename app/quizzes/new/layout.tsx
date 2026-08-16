import { NewQuizHeader } from "@/components/quizzers/new";
import { ScreenWrapper } from "@/components/ui/screenWrapper";

export default function NewQuizLayout({ children }: { children: React.ReactNode }) {


    return (
        <ScreenWrapper>
            <NewQuizHeader />
            {children}
        </ScreenWrapper>
    )
}
