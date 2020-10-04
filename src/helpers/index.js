import {
  assoc,
  curry,
  map,
  propEq,
  when
} from 'ramda'

export const chageStatus = curry((status, orderNumber, items) => map(
  when(propEq('orderNumber', orderNumber), assoc('status', status)),
  items
))
