const {calculateNextEvent}= require('../build/index') 

test('Nov 2020',()=>{
    const c =calculateNextEvent('nov 1 2020')
    expect(c.toUTCString()).toBe("Sat, 14 Nov 2020 14:00:00 GMT")
})


test('1 Oct 2020',()=>{
    const c =calculateNextEvent('1 Oct 2020')
    expect(c.toUTCString()).toBe("Sat, 10 Oct 2020 13:00:00 GMT")
})
test('15 Oct, after event has happened 2020 should be for november',()=>{
    const c =calculateNextEvent('Oct 15 2020')
    expect(c.toUTCString()).toBe("Sat, 14 Nov 2020 14:00:00 GMT")
})