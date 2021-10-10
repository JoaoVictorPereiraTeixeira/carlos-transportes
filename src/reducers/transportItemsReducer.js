export const initalState = [
    {
        item:"Cama desmontada",
        quantity: 0
    },
    {
        item:"Guarda-roupa montado",
        quantity: 0
    },
    {
        item:"Guarda-roupa desmontado",
        quantity: 0
    },
    {
        item: "Amário montado",
        quantity: 0
    },
    {
        item:"Armário desmontado",
        quantity: 0
    },
    {
        item: "Geladeira",
        quantity: 0
    },
    {
        item: "Fogão",
        quantity: 0
    },
    {
        item: "Mesa montada",
        quantity: 0
    },
    {
        item: "Mesa desmontada",
        quantity: 0
    },
    {
        item: "Sofá",
        quantity: 0
    },
    {
        item: "Televisão",
        quantity: 0
    }
]

export const transportItemsReducer = (state, action) => {  
    switch(action.type){
        case 'ADD_ITEM_TO_TRANSPORT':
            return state.concat({
                item: action.itemToTransport,
                quantity: action.quantity,
            })
        case 'CHANGE_QUANTITY_ITEM_TRANSPORT':
            return state.map(itemToTransport => {
                if(itemToTransport.item == action.itemToTransport){
                    itemToTransport.quantity = action.quantity
                }

                return itemToTransport
            })
        default:
            return state;
    }
}
