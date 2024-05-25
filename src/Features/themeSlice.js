import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: true,
  reducers: {
    toggleTheme: (state) => {
      return (state = !state);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;








// import { createSlice } from "@reduxjs/toolkit";

// export const themeSlice = createSlice({
//     name : 'themeSlice',
//     initialState : true,
//     reducers : {
//         toggleTheme : (state) =>{
//         // state = !state;  This line is showing error, the next line fixes that error so i used that
//             return !state;
//         },
//     },
// });

// export const {toggleTheme} = themeSlice.actions;
// export default themeSlice.reducer;