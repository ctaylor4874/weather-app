/**
 * Created by cody on 4/12/17.
 */
import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; // looks like [city, city, city] NOT [city, [city, city]]
    }
    return state;
}