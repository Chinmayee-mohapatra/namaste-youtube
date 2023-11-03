import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    // actions
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

/**
 *
 * LRU Cache
 *
 * [restrict the cache to have last 100 keys]
 * Once it exceeds then start removing from the first ones.
 *
 */
