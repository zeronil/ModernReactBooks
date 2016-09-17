'use strict';

export function selectBook (book) {

    console.log(`Book "${book.title}" has been selected.`);

    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}