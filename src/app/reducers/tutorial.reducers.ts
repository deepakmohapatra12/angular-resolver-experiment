import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import * as TutorialActions from '../actions/tutorials.actions';
import { Tutorial } from 'src/app/models/tutorials.model';

const initialState: Tutorial = {
    name: 'Initial state',
    url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        default:
            return state;
    }
}
