
import {FETCH_ABILITIES, INVALID_REQST} from '../../actions/index'
import pokemonReducer from '../../reducers/pokemonReducer'
const INITIAL_STATE = {
    res: [],
    error: null
}
describe(' reducers pokemonReducer', () => {
    
    it("should return ddefault state", ()=>{
       const newstate = pokemonReducer(undefined,{});
       expect(newstate).toEqual(INITIAL_STATE);
    })

    it("Success",()=>{
        // const posts=[{title:'test1'},{title:'test2'},{title:'test3'}];
        const newstate =pokemonReducer(INITIAL_STATE,{
            type:FETCH_ABILITIES,
            payload:['wartortle']
        });
        expect(newstate).toEqual({
            ...INITIAL_STATE , 
            res:['wartortle']
          }  )
    })

    it('failure', ()=>{
        const newstate =pokemonReducer(INITIAL_STATE,{
            type:INVALID_REQST,
            payload:""
        });
        expect(newstate).toEqual({
            ...INITIAL_STATE , 
            error:""
          })
    })
})