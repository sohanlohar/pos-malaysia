import React, { useState } from "react";
import { DataTableWrapper } from "../../../_metronic/partials/widgets/tables/DataTableWrapper";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { removeZone4Row } from "../../store/zoneFormSlices";

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
  const dispatch = useDispatch();

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

  const rowDeleteHandleFn = (index: number) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      dispatch(removeZone4Row(index));
    }
  };

  return (
    <div className="card">
      <DataTableWrapper
        data={formData}
        columns={columns}
        handleDelete={rowDeleteHandleFn}
      />
    </div>
  );
};

export { WalkInZone4 };
