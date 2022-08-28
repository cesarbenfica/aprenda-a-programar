let n = 7
let d = 0

for (i = 1; i <=  n; i++) {
    if (n % i == 0) {
        d++
    }
}
if (d == 2) {
    console.log(`Sim, o número ${n} é primo!`)
} else {
    console.log(`Não, o número ${n} não é primo!`)
}