console.log('01', '1' == 1)
console.log('02', '1' === 1)
console.log('03', '3' != 3)
console.log('04', '3' !== 3)

console.log('05', '1' < 1)
console.log('07', '1' > 1)
console.log('08', '1' <= 1)
console.log('09', '1' >= 1)

const d1 = new Date()
const d2 = new Date()

console.log(d1)
console.log(`09)  ${d1 === d2}`)
console.log(`10)  ${d1 == d2}`)
console.log(d1.getTime())
console.log(`11)  ${d1.getTime() === d2.getTime()}` )

console.log(`012)  ${undefined == null}`)
console.log(`013)  ${undefined === null}`)