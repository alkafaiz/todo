import {
    CALENDAR_MONTHS,
    PRIORITIES,
    SORT_AZ,
    SORT_BELUM_SELESAI,
    SORT_TERBARU,
    SORT_TERLAMA,
    SORT_ZA,
} from './constants';

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

export function sortItem(order, initialItems) {
    let items = [...initialItems];
    switch (order) {
        case SORT_TERBARU:
            items.sort(function (a, b) {
                if (a.id > b.id) return -1;
                if (a.id < b.id) return 1;

                return 0;
            });
            break;

        case SORT_TERLAMA:
            items.sort(function (a, b) {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;

                return 0;
            });
            break;

        case SORT_AZ:
            items.sort(function (a, b) {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;

                return 0;
            });
            break;

        case SORT_ZA:
            items.sort(function (a, b) {
                if (a.title > b.title) return -1;
                if (a.title < b.title) return 1;

                return 0;
            });
            break;

        case SORT_BELUM_SELESAI:
            items.sort(function (a, b) {
                return a.is_active === b.is_active ? 0 : a.is_active ? -1 : 1;
            });
            break;

        default:
            break;
    }
    return items;
}
