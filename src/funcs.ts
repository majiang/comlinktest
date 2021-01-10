export function f(n: number)
{
    const start = new Date()
    let ret = 0
    while (new Date().getTime() < start.getTime() + n * 1000)
    {
        ret += onesec()
        console.log(`${n}: ${ret}`)
    }
    return ret
}
function onesec(): number
{
    const start = new Date()
    while (new Date().getTime() < start.getTime() + 1000)
    {}
    return Math.random()
}
