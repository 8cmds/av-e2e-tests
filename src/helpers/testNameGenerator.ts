export function generateName(): string {
    return Math.random().toString(36).substring(2, 7).toUpperCase();
}