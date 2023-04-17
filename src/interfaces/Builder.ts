export interface Builder {
    addTitle(title: string, questionNumber: number): Builder;
    addOptions(possibleAnswers: Record<string, string>, callbackListener: (e: MouseEvent) => void): Builder;
    addAnswerInput(): void;
    getQuestion(): HTMLDivElement;
    reset(): void;
}