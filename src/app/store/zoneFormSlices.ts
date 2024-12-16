import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ZoneFormRow {
  from: string;
  to: string;
  base: string;
  fuelSurcharge15: string;
  handlingCharge15: string;
  posCoverage: string;
  overweightSurcharge: string;
  baseSurchargePos: string;
  sst6: string;
  allInPriceSST: string;
}

interface Zone1FormState {
  rows: ZoneFormRow[];
}

interface Zone2FormState {
  rows: {
    from: string;
    to: string;
    base: string;
    fuelSurcharge15: string;
    handlingCharge15: string;
    posCoverage: string;
    overweightSurcharge: string;
    baseSurchargePos: string;
    sst6: string;
    allInPriceSST: string;
  }[];
}

interface Zone3FormState {
  rows: {
    from: string;
    to: string;
    base: string;
    fuelSurcharge15: string;
    handlingCharge15: string;
    posCoverage: string;
    overweightSurcharge: string;
    baseSurchargePos: string;
    sst6: string;
    allInPriceSST: string;
  }[];
}

interface Zone4FormState {
  rows: {
    from: string;
    to: string;
    base: string;
    fuelSurcharge15: string;
    handlingCharge15: string;
    posCoverage: string;
    overweightSurcharge: string;
    baseSurchargePos: string;
    sst6: string;
    allInPriceSST: string;
  }[];
}

interface Zone5FormState {
  rows: {
    from: string;
    to: string;
    base: string;
    fuelSurcharge15: string;
    handlingCharge15: string;
    posCoverage: string;
    overweightSurcharge: string;
    baseSurchargePos: string;
    sst6: string;
    allInPriceSST: string;
  }[];
}

// Initial states for each zone
const zone1InitialState: Zone1FormState = {
  rows: [
    {
      from: "",
      to: "",
      base: "",
      fuelSurcharge15: "",
      handlingCharge15: "",
      posCoverage: "",
      overweightSurcharge: "",
      baseSurchargePos: "",
      sst6: "",
      allInPriceSST: "",
    },
  ],
};

const zone2InitialState: Zone2FormState = {
  rows: [
    {
      from: "",
      to: "",
      base: "",
      fuelSurcharge15: "",
      handlingCharge15: "",
      posCoverage: "",
      overweightSurcharge: "",
      baseSurchargePos: "",
      sst6: "",
      allInPriceSST: "",
    },
  ],
};

const zone3InitialState: Zone3FormState = {
  rows: [
    {
      from: "",
      to: "",
      base: "",
      fuelSurcharge15: "",
      handlingCharge15: "",
      posCoverage: "",
      overweightSurcharge: "",
      baseSurchargePos: "",
      sst6: "",
      allInPriceSST: "",
    },
  ],
};

const zone4InitialState: Zone4FormState = {
  rows: [
    {
      from: "",
      to: "",
      base: "",
      fuelSurcharge15: "",
      handlingCharge15: "",
      posCoverage: "",
      overweightSurcharge: "",
      baseSurchargePos: "",
      sst6: "",
      allInPriceSST: "",
    },
  ],
};

const zone5InitialState: Zone5FormState = {
  rows: [
    {
      from: "",
      to: "",
      base: "",
      fuelSurcharge15: "",
      handlingCharge15: "",
      posCoverage: "",
      overweightSurcharge: "",
      baseSurchargePos: "",
      sst6: "",
      allInPriceSST: "",
    },
  ],
};

// Slice for Zone 1
// const zone1formSlice = createSlice({
//   name: "zone1",
//   initialState: zone1InitialState,
//   reducers: {
//     setFormState(state, action: PayloadAction<Zone1FormState>) {
//       state.rows = [...state.rows, ...action.payload.rows];
//     },
//     resetFormState(state) {
//       state.rows = zone1InitialState.rows;
//     },
//   },
// });

// Slice for Zone 1
const zone1formSlice = createSlice({
  name: "zone1",
  initialState: zone1InitialState,
  reducers: {
    setFormState(state, action: PayloadAction<Zone1FormState>) {
      state.rows = [...state.rows, ...action.payload.rows];
    },
    resetFormState(state) {
      state.rows = zone1InitialState.rows;
    },
    updateZone1Row(
      state,
      action: PayloadAction<{ row: DataRow; index: number }>
    ) {
      const { index, row } = action.payload;
      if (state.rows[index]) {
        state.rows[index] = { ...state.rows[index], ...row };
      }
    },
    removeZone1Row(state, action: PayloadAction<number>) {
      state.rows = state.rows.filter((_, index) => index !== action.payload);
    },
    // addRow(state, action: PayloadAction<ZoneFormRow>) {
    //   state.rows.push(action.payload);
    // },
  },
});

// Slice for Zone 2
const zone2formSlice = createSlice({
  name: "zone2",
  initialState: zone2InitialState,
  reducers: {
    setFormState(state, action: PayloadAction<Zone2FormState>) {
      state.rows = [...state.rows, ...action.payload.rows];
    },
    removeZone2Row(state, action: PayloadAction<number>) {
      state.rows = state.rows.filter((_, index) => index !== action.payload);
      console.log("🚀 ~ action.payload:", action.payload)
    },
    resetFormState(state) {
      state.rows = zone2InitialState.rows;
    },
  },
});

// Slice for Zone 3
const zone3formSlice = createSlice({
  name: "zone3",
  initialState: zone3InitialState,
  reducers: {
    setFormState(state, action: PayloadAction<Zone3FormState>) {
      state.rows = [...state.rows, ...action.payload.rows];
    },
    removeZone3Row(state, action: PayloadAction<number>) {
      state.rows = state.rows.filter((_, index) => index !== action.payload);
    },
    resetFormState(state) {
      state.rows = zone3InitialState.rows;
    },
  },
});

// Slice for Zone 4
const zone4formSlice = createSlice({
  name: "zone4",
  initialState: zone4InitialState,
  reducers: {
    setFormState(state, action: PayloadAction<Zone4FormState>) {
      state.rows = [...state.rows, ...action.payload.rows];
    },
    removeZone4Row(state, action: PayloadAction<number>) {
      state.rows = state.rows.filter((_, index) => index !== action.payload);
    },
    resetFormState(state) {
      state.rows = zone4InitialState.rows;
    },
  },
});

// Slice for Zone 5
const zone5formSlice = createSlice({
  name: "zone5",
  initialState: zone5InitialState,
  reducers: {
    setFormState(state, action: PayloadAction<Zone5FormState>) {
      state.rows = [...state.rows, ...action.payload.rows];
    },
    removeZone5Row(state, action: PayloadAction<number>) {
      state.rows = state.rows.filter((_, index) => index !== action.payload);
    },
    resetFormState(state) {
      state.rows = zone5InitialState.rows;
    },
  },
});

// Export actions and reducers
export const {
  setFormState: setZone1FormState,
  resetFormState: resetZone1FormState,
  updateZone1Row: updateZone1Row,
  removeZone1Row: removeZone1Row,
  addRow: addZone1Row,
} = zone1formSlice.actions;
export const {
  setFormState: setZone2FormState,
  resetFormState: resetZone2FormState,
  removeZone2Row: removeZone2Row,
} = zone2formSlice.actions;
export const {
  setFormState: setZone3FormState,
  resetFormState: resetZone3FormState,
  removeZone3Row: removeZone3Row,
} = zone3formSlice.actions;
export const {
  setFormState: setZone4FormState,
  resetFormState: resetZone4FormState,
  removeZone4Row: removeZone4Row,
} = zone4formSlice.actions;
export const {
  setFormState: setZone5FormState,
  resetFormState: resetZone5FormState,
  removeZone5Row: removeZone5Row,
} = zone5formSlice.actions;

export const zone1formReducer = zone1formSlice.reducer;
export const zone2formReducer = zone2formSlice.reducer;
export const zone3formReducer = zone3formSlice.reducer;
export const zone4formReducer = zone4formSlice.reducer;
export const zone5formReducer = zone5formSlice.reducer;
