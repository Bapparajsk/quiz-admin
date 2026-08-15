import QuizStepper from "@/components/quiz/quiz-stepper";
import { ScreenWrapper } from "@/components/ui/screenWrapper";

export default function NewQuizLayout({ children }: { children: React.ReactNode }) {


    return (
        <ScreenWrapper>
            <QuizStepper>
                {children}
            </QuizStepper>
        </ScreenWrapper>
    )
}
