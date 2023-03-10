export const formatIsoDateTime = (date: Date) => {
  // возвращает дату в формате: 01 Января 2021 00:00:00
  return date.toLocaleString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}
