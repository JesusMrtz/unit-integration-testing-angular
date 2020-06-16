export function increment(numberPositive: number) {
    if (numberPositive > 100) {
        return 100;
    }

    return numberPositive += 1;
}
