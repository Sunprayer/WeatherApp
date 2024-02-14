export function mToKmPerHour(mPerHour: number): string {
  const kmPerHour = mPerHour * 3.6;
  return `${kmPerHour.toFixed(0)} km/h`;
}
