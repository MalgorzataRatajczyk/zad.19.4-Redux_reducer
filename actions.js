import { createStore } from 'redux';
import { Provider } from 'react-redux';
import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

{
    type: ADD_COMMENT,
    text: 'My first comment !'
}

{
    type: REMOVE_COMMENT,
    id: 20 // przykładowy id komentarza do usunięcia
}

{
    type: EDIT_COMMENT,
    id: 20,
    text: 'wyedytowany tekst komentarza'
}

{
    type: THUMB_UP_COMMENT,
    id: 20

}

{
    type: THUMB_DOWN_COMMENT,
    id: 20
}

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id

    }
}

function editComment(id, text) {
    return {
        type: ADD_COMMENT,
        id,
        text

    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

//dispatch(addComment('nowy komentarz!'));
//dispatch(addComment('kolejny nowy komentarz!'));


const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundEditComment = (id, text) => dispatch(editComment (id, text));
const boundThumbUpComment = id => dispatch(thumbUpComment (id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));

boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');
boundRemoveComment(id);
boundEditComment(id, text);
boundThumbUpComment(id);
boundThumbDownComment(id);