const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const getFormattedDate = (date: Date | null): string => {
    if (date === null) {
        return 'Present';
    }

    const monthName = MONTH_NAMES[date.getMonth()];
    const formattedMonthName =
        monthName.length <= 4 ? monthName : monthName.slice(0, 3);

    const year = date.getFullYear();
    return `${formattedMonthName} ${year}`;
};
