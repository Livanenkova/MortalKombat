export function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className){
    $tag.classList.add(className);
  }
  return $tag;
};

export const createRandomNumber = (num) => Math.ceil(Math.random() * num);

export function getTime() {
  const date = new Date;
  return date.getHours() + ':' + date.getMinutes();
}