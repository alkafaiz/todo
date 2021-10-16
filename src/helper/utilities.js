import { CALENDAR_MONTHS } from './constants';

export function parseISODateString(ISODateTime) {
    const datetime = new Date(ISODateTime);
    const date = datetime.getDate();
    const month = CALENDAR_MONTHS[datetime.getMonth()];
    const year = datetime.getFullYear();

    return `${date} ${month} ${year}`;
}
