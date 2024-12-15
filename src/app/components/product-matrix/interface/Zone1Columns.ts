export const Zone1Columns = [
  { label: "From", accessor: "from" },
  { label: "To", accessor: "to" },
  { label: "Base", accessor: "base" },
  { label: "Fuel Surcharge 15%", accessor: "fuelSurcharge15" },
  { label: "Handling Charge 15%", accessor: "handlingCharge15" },
  { label: "Pos Coverage", accessor: "posCoverage" },
  { label: "Overweight Surcharge", accessor: "overweightSurcharge" },
  { label: "Base + Surcharge + Pos Coverage", accessor: "baseSurchargePos" },
  { label: "6% SST", accessor: "sst6" },
  { label: "All-in-Price + SST", accessor: "allInPriceSST" },
];


export type RowData = {
  from: number | "";
  to: number | "";
  base: number | "";
  fuelSurcharge15: number | "";
  handlingCharge15: number | "";
  posCoverage: number | "";
  overweightSurcharge: number | "";
  baseSurchargePos: number | "";
  sst6: number | "";
  allInPriceSST: number | "";
};