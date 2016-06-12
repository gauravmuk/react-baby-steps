1. Redux has immutable state tree.
2. Components dispatch action to add a state to state tree.
3. Pure functions do not modify the actual data or do not wait for a network call to happen
4. Pure function may modify the actual value or override the value itself.
5. State Mutation: Reducer functions takes previousState, dispatched action and give nextState.
6. Previous should be pure always!
