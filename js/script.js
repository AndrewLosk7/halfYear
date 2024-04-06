function calculateDateDifference(startDate, endDate) {

    const startMilliseconds = startDate.getTime();
    const endMilliseconds = endDate.getTime();

    const differenceInMilliseconds = Math.abs(endMilliseconds - startMilliseconds);


    const millisecondsInDay = 1000 * 60 * 60 * 24;

    const daysInDifference = Math.floor(differenceInMilliseconds / millisecondsInDay);

    return daysInDifference;
}


const startDate = new Date('2023-10-07');
let endDate = new Date(); 

const daysDifference = calculateDateDifference(startDate, endDate);
console.log('Difference between the dates in days:', daysDifference);

const title = document.querySelector('.date');

title.textContent = daysDifference + ' днів(-я)'
