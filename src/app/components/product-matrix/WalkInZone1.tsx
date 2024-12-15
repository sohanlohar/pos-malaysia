import React from "react";
import { DataTableWrapper } from "../../../_metronic/partials/widgets/tables/DataTableWrapper";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { removeZone1Row } from "../../store/zoneFormSlices";

const WalkInZone1: React.FC = () => {
  const formData = useSelector((state: RootState) => state.zone1.rows);
  const dispatch = useDispatch();

  const columns = [
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
    dispatch(removeZone1Row(index)); 
  };

  return (
    <div className="card">
      <DataTableWrapper data={formData} columns={columns} handleDelete={rowDeleteHandleFn}/>
    </div>
  );
};

export { WalkInZone1 };
