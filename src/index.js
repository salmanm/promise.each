export default async function (items, iteratee) {
  items = Array.isArray(items) ? items : [items]

  for (let [index, item] of items.entries()) {
    await Promise.resolve(item).then((item) => iteratee(typeof item === 'function' ? item() : item, index))
  }
}
