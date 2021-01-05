// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(6))


const event = {
    name: 'Birthday Party',
    guestlist: ['faraz', 'don', 'allu'],
    printGuestList() {
        // const that = this
        console.log('Guest list for ' + this.name)

        this.guestlist.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()