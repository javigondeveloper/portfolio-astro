export function getYearAndMonth(date: string, lang: string) {
  const fullDate = new Date(date);
  if (fullDate.toString() !== 'Invalid Date') {
    return new Intl.DateTimeFormat(lang, {
      month: 'short',
      year: 'numeric',
    }).format(fullDate);
  }
  return date;
}

export function getPeriod(startDAte: string, endDate: string, lang: string) {
  return `${getYearAndMonth(startDAte, lang)} - ${getYearAndMonth(
    endDate,
    lang
  )}`;
}
