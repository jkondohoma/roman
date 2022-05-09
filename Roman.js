
/**
 * Jaelle Kondohoma
 * 
 * Given a roman numeral, convert it to an integer
 * constraints: input can at most 15 characters, at least 1
 * input contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')
 * 
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {

    let num = 0
    const input = s.toUpperCase() // convert all to upper case so that input is not case sensistive
    const in_arr = input.split("")
    const len = in_arr.length
    const check = validate(in_arr)

    if (check) {

        const nums = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }

        if (len === 1) {

            num = nums[input]

        }
        else {

            var sum = 0

            for (let i = 0; i < len; i++) {

                const curr = nums[input[i]]
                const j = i + 1
                const next = !(j === len) ? nums[input[j]] : 0
                // console.log(`curr:` + curr + `\n next: ` + next + `\n`)
                if (curr < next) {
                    sum += (next - curr)
                    i++ // already used next value in the sum so skip it on next turn
                } else {
                    sum += curr
                }
                // console.log(sum + `\n`)
            }

            num = sum
        }

    } else {
        console.log(`input (` + s + `) is invalid`)
    }

    return num
};

//check if array of input contains all valid characters
var validate = function (arr) {
    var valid = true
    const valid_arr = ["I", "V", "X", "L", "C", "D", "M",]

    if (arr.length === 0) {
        valid = false
    } else if ((arr.length >= 1) && (arr.length <= 15)) {
        for (let i = 0; i < arr.length; i++) {
            if (!valid_arr.includes(arr[i])) {
                valid = false
                break
            }
        }

    } else if (!((arr.length >= 1) && (arr.length <= 15))) {
        valid = false
    }
    return valid
}


console.log(`integer value: ` + romanToInt("LvIiI"))