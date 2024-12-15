import React, { useState } from "react";
import { DataTableWrapper } from "../../../_metronic/partials/widgets/tables/DataTableWrapper";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

type DataRow = {
  from: number;
  to: number;
  base: number;
  fuelSurcharge15: number;
  handlingCharge15: number;
  posCoverage: number;
  overweightSurcharge: number;
  baseSurchargePos: number;
  sst6: number;
  allInPriceSST: number;
};

type Column<DataType> = {
  label: string;
  accessor: keyof DataType;
};

const WalkInZone4: React.FC = () => {
  const formData = useSelector((state: RootState) => state.zone4.rows);

  const columns: Column<DataRow>[] = [
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

  // const data = [
  //   {
  //     from: 1001,
  //     to: 2001,
  //     base: 100,
  //     fuelSurcharge15: 15,
  //     handlingCharge15: 15,
  //     posCoverage: 5,
  //     overweightSurcharge: 10,
  //     baseSurchargePos: 145,
  //     sst6: 8.7,
  //     allInPriceSST: 153.7,
  //   },
  //   {
  //     from: 1002,
  //     to: 2002,
  //     base: 200,
  //     fuelSurcharge15: 30,
  //     handlingCharge15: 30,
  //     posCoverage: 10,
  //     overweightSurcharge: 20,
  //     baseSurchargePos: 290,
  //     sst6: 17.4,
  //     allInPriceSST: 307.4,
  //   },
  //   {
  //     from: 1003,
  //     to: 2003,
  //     base: 150,
  //     fuelSurcharge15: 22.5,
  //     handlingCharge15: 22.5,
  //     posCoverage: 7,
  //     overweightSurcharge: 15,
  //     baseSurchargePos: 217,
  //     sst6: 13.02,
  //     allInPriceSST: 230.02,
  //   },
  // ];

  return (
    <div className="card">
      <DataTableWrapper data={formData} columns={columns} />
    </div>
  );
};

export { WalkInZone4 };
