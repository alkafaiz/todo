export const END_POINTS = {
    activity: {
        href: 'https://todo.api.devcode.gethired.id/activity-groups',
    },
    todoItem: {
        href: 'https://todo.api.devcode.gethired.id/todo-items',
    },
};

export const CALENDAR_MONTHS = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
];

export const PRIORITIES = [
    { label: 'Very High', color: 'bg-red-500', value: 'very-high' },
    { label: 'High', color: 'bg-yellow-500', value: 'high' },
    { label: 'Medium', color: 'bg-green-500', value: 'normal' },
    { label: 'Low', color: 'bg-blue-500', value: 'low' },
    { label: 'Very Low', color: 'bg-purple-500', value: 'very-low' },
];

export const SORT_TERBARU = 'datetime-asc';
export const SORT_TERLAMA = 'datetime-desc';
export const SORT_AZ = 'char-asc';
export const SORT_ZA = 'char-desc';
export const SORT_BELUM_SELESAI = 'active';

export const ORDERS = [
    { label: 'Terbaru', value: SORT_TERBARU },
    { label: 'Terlama', value: SORT_TERLAMA },
    { label: 'A-Z', value: SORT_AZ },
    { label: 'Z-A', value: SORT_ZA },
    { label: 'Belum Selesai', value: SORT_BELUM_SELESAI },
];
