/**
 * Stores all reducer functions for different Controller views.
 * Views are responsible for reduce functions registration.
 * */
export default function() {

    // container for reduce functions
    const internalReduceMap = {};

    /**
     * Should be given to Redux.createStore as subscribe function
     * */
    this.subscribe = (state, action) => {
        switch (action.type) {
            case "@@redux/INIT" : break;
            default : {
                const reducer = internalReduceMap[action.type];
                if (reducer) {
                    return Object.assign({}, state, reducer(state, action));
                } else {
                    console.warn("Unmapped action '" + action.type + "'.");
                }
            }
        }
        return state;
    };

    /**
     * IoC for adding reducer functions. Each view registers it's own reducers and nobody else knows about them.
     * @param reduceMap object, where key is action type, and value is function(state, action) which should return new state, or return propagated state if nothing happened
     * */
    this.register = (reduceMap) => {
        // TODO check duplicates and log warn
        Object.assign(internalReduceMap, reduceMap);
    };
}