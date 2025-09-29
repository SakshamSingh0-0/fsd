
const printMessage = (message) => {
    console.log(message);
}

const bookTicket = () => {
    setTimeout(() => {
        printMessage("booking ticket...");
        setTimeout(() => {
            printMessage("login has been done successfully");
            setTimeout(() => {
                printMessage("seat has been done successfully");
                setTimeout(() => {
                    printMessage("payment has been done successfully");
                    setTimeout(() => {
                        printMessage("ticket booked successfully");
                        printMessage("enjoy your movie");
                    }, 2000);
                }, 4000);
            }, 3000);
        }, 2000);
    }, 1000);
}
