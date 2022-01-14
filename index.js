let i = 1000;
const deadInside = () => {
    setTimeout(() => {
            console.log(`${i} - 7 = ${i - 7}`);
            i -= 7;
            if (i > 0) {
                deadInside();
            } else {
                console.log('Kek');
            }
    }, 50);
}

deadInside();
