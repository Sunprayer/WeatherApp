export function dayOrNightIcon(
  iconName: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours();
  const isDayTime = hours >= 6 && hours < 21;

  return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}
