export default function (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: 'smooth',
      offset: { x: 0, y: 10 },
    }
  }
}
