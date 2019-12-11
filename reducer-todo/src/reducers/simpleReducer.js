
export const initialState = {tasks: [ {
    
    item: ' ',
    completed: false,
    id: Date.now()

}]};

export const reducer = (state, action) =>  {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
                };
            return {
                ...state,
                tasks: [...state.tasks, newItem]
            };
            case 'TOGGLE_ITEM':
                return {
                    ...state,
                    tasks: state.tasks.map(item => {
                        if (action.payload === item.id) {
                          return {
                            ...item,
                            completed: !item.completed
                          };
                        }
                          return item
                        }),
                    }


            case 'CLEAR_COMPLETED':
                return{
                    ...state,
                    tasks: state.tasks.filter(item => !item.completed)
                }
        default:
            return state;
    }

};


    
