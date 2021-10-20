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

function sortByDateAsc(initialItems) {
    let items = [...initialItems];
    items.sort(function (a, b) {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;

        return 0;
    });
    return items;
}

function sortByDateDesc(initialItems) {
    let items = [...initialItems];
    items.sort(function (a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;

        return 0;
    });
    return items;
}

function sortByAsc(initialItems) {
    let items = [...initialItems];
    items.sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;

        return 0;
    });
    return items;
}

function sortByDesc(initialItems) {
    let items = [...initialItems];
    items.sort(function (a, b) {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;

        return 0;
    });
    return items;
}

function sortByBelumSelesai(initialItems) {
    let items = [...initialItems];
    items.sort(function (a, b) {
        return a.is_active === b.is_active ? 0 : a.is_active ? -1 : 1;
    });
    return items;
}

export function getSortedItems(items) {
    if (items.length >= 2) {
        return {
            [SORT_TERBARU]: sortByDateAsc(items),
            [SORT_TERLAMA]: sortByDateDesc(items),
            [SORT_AZ]: sortByAsc(items),
            [SORT_ZA]: sortByDesc(items),
            [SORT_BELUM_SELESAI]: sortByBelumSelesai(items),
        };
    } else {
        return {
            [SORT_TERBARU]: items,
            [SORT_TERLAMA]: items,
            [SORT_AZ]: items,
            [SORT_ZA]: items,
            [SORT_BELUM_SELESAI]: items,
        };
    }
}
