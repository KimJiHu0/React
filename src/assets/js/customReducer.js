export function customReducer(state, action) {
    if (action.type === 'add') {
        document.getElementById('product').value = '';
        return [...state, action.product];
    } else if (action.type === 'delete') {
        return [...state].filter((el, index) => index !== action.index);
    }
    return state;
}
