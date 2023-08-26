const redux=require('redux');
const counterReducer=(state={counter:0},action)=>{
   if(action.type==='incrementBy2'){
        return{
    
            counter:state.counter+2
        }
    }else if(action.type==='decrementBy2'){
        return{
        counter:state.counter-2
        }
    }
    return state;
   
   
};
console.log(counterReducer)
 const store=redux.createStore(counterReducer);

 const counterSubscriber=()=>{
    const latestState=store.getState();
    console.log(latestState);
 };
 store.subscribe(counterSubscriber);
// 
for(let i=0;i<5;i++){
    store.dispatch({type:'incrementBy2'});
}
for(let i=0;i<5;i++){
    store.dispatch({type:'decrementBy2'});
}





