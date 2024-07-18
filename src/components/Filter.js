
export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';

export function applyFilter(ToDos, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return ToDos.filter(item => item.completed === true);

        case FILTER_ACTIVE:
            return ToDos.filter(item => item.completed !== true);

        default:
            return ToDos;
    }
}

export function search(ToDos, query) {
    let q = query.trim().toLowerCase();

    return ToDos.filter(({text}) => stringIncludes(text.toLowerCase(), q));
}


export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed'
    };
}
