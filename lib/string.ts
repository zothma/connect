export function slugify(text: string) {
  return text.toLocaleLowerCase().replaceAll(' ', '-')
}
