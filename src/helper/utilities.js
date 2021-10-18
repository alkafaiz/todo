import { CALENDAR_MONTHS, PRIORITIES } from './constants';

export function parseISODateString(ISODateTime) {
    const datetime = new Date(ISODateTime);
    const date = datetime.getDate();
    const month = CALENDAR_MONTHS[datetime.getMonth()];
    const year = datetime.getFullYear();

    return `${date} ${month} ${year}`;
}

export function getPriorityColor(prio) {
    const priority = PRIORITIES.find((priority) => priority.value === prio);
    return priority?.color || '';
}

export function parseBooleanFromBinary(binary) {
    return binary === 1 ? true : false;
}

export function parseBinaryFromBoolean(bool) {
    return !!bool ? 1 : 0;
}
