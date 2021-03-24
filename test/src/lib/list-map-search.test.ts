import test from 'ava'
import * as sinon from 'sinon'
import listMapSearch from '~src/lib/list-map-search'

const getId = (item: any): number => item.id
const getIdAsString = (item: any): string => `${item.id}`

test('listMapSearch: should return empty object when input are empty', (t) => {
  t.deepEqual(listMapSearch([], [], getId, getId), {})
})
test('listMapSearch: should return false when needle is missing from haystack', (t) => {
  t.is(listMapSearch([{ id: 1 }], [], getId, getId), false)
})
test('listMapSearch: should map haystack with need based on id', (t) => {
  const result = listMapSearch([{ id: 1 }], [{ id: 1, value: '42' }], getId, getId)
  t.deepEqual(result, { 1: { id: 1, value: '42' } })
})
test('listMapSearch: should early break when all needles are found', (t) => {
  const needleKeyGetSpy = sinon.spy(getId)
  const haystackKeyGetSpy = sinon.spy(getId)
  const result = listMapSearch(
    [{ id: 1 }],
    [
      { id: 1, value: '42' },
      { id: 1, value: '41' },
    ],
    needleKeyGetSpy,
    haystackKeyGetSpy
  )
  t.deepEqual(result, { 1: { id: 1, value: '42' } })
  t.true(needleKeyGetSpy.calledOnceWith({ id: 1 }))
  t.true(haystackKeyGetSpy.calledOnceWith({ id: 1, value: '42' }))
})
test('listMapSearch: should early break when all needles are larger than haystack', (t) => {
  const needleKeyGetSpy = sinon.spy(getId)
  const haystackKeyGetSpy = sinon.spy(getId)
  const result = listMapSearch(
    [{ id: 1 }, { id: 2 }, { id: 3 }],
    [
      { id: 1, value: '42' },
      { id: 1, value: '41' },
    ],
    needleKeyGetSpy,
    haystackKeyGetSpy
  )
  t.is(result, false)
  t.true(needleKeyGetSpy.notCalled)
  t.true(haystackKeyGetSpy.notCalled)
})
test('listMapSearch: should be able to use string as keys', (t) => {
  const result = listMapSearch([{ id: 1 }], [{ id: 1, value: '42' }], getIdAsString, getIdAsString)
  t.deepEqual(result, { '1': { id: 1, value: '42' } })
})
test('listMapSearch: should not be troubled by duplicates in haystack and keep the first match', (t) => {
  const result = listMapSearch(
    [{ id: 1 }, { id: 2 }],
    [
      { id: 1, value: '42' },
      { id: 1, value: '0' },
      { id: 2, value: '69' },
    ],
    getIdAsString,
    getIdAsString
  )
  t.deepEqual(result, { '1': { id: 1, value: '42' }, '2': { id: 2, value: '69' } })
})
test('listMapSearch: should return false after all haystack has been tried', (t) => {
  const result = listMapSearch(
    [{ id: 1 }, { id: 2 }],
    [
      { id: 1, value: '42' },
      { id: 1, value: '0' },
      { id: 3, value: '69' },
    ],
    getIdAsString,
    getIdAsString
  )
  t.is(result, false)
})
test('listMapSearch: haystack can be plain array', (t) => {
  const result = listMapSearch([{ id: 1 }, { id: 2 }], [0, 1, 2, 3], getId, (index) => index + 1)
  t.deepEqual(result, { 1: 0, 2: 1 })
})
test('listMapSearch: needle can be plain array', (t) => {
  const result = listMapSearch(
    [1, 2],
    [
      { id: 1, value: '42' },
      { id: 1, value: '0' },
      { id: 2, value: '69' },
    ],
    (index) => index,
    getId
  )
  t.deepEqual(result, { 1: { id: 1, value: '42' }, 2: { id: 2, value: '69' } })
})
