import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColumnsState {
  visibleColumns: string[];
}

const initialState: ColumnsState = {
  visibleColumns: [],
};

const zonesColumnSlice = createSlice({
  name: "ZonesColumns",
  initialState,
  reducers: {
    setVisibleColumns: (state, action: PayloadAction<string[]>) => {
      state.visibleColumns = action.payload;
    },
    toggleColumn: (state, action: PayloadAction<string>) => {
      const colKey = action.payload;
      if (state.visibleColumns.includes(colKey)) {
        state.visibleColumns = state.visibleColumns.filter(
          (key) => key !== colKey
        );
      } else {
        state.visibleColumns.push(colKey);
      }
    },
  },
});

export const { setVisibleColumns, toggleColumn } = zonesColumnSlice.actions;
export default zonesColumnSlice.reducer;
