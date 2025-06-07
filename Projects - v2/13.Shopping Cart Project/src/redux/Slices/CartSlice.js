import { createSlice } from "@reduxjs/toolkit";


{/* idhar hum redux aur slices ka use karte hai for adding and removing items in the cart */}

export const CartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action)=>
             {  
                  state.push(action.payload);;// here action payload jo aapne input send kiya hai add() function mei usko darshata hai

             },

        remove:(state,action)=>
            {
                 return state.filter(function f9(item)
                             {
                                 return item.id!== action.payload;
                             })
                /*return state.filter(function f9(item) means -  is state ke andar sirf vahi waali item ko retain krna jinki id jo action ke andar jo input parameter mei aayi hai uske equal naa ho */
            },
    }

})

export const{add,remove}=CartSlice.actions;
export default CartSlice.reducer;