export function setTitle(title: string, flag: string) {
  document.title = title;
  document.getElementById("favicon")?.setAttribute("href", flag);
}
