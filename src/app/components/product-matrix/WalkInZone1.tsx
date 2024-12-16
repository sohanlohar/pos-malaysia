import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataTableWrapper } from "../../../_metronic/partials/widgets/tables/DataTableWrapper";
import { RootState } from "../../store";
import { removeZone1Row } from "../../store/zoneFormSlices";

type DataRow = {
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
};

const WalkInZone1: React.FC = ({
  setSelectedRowData,
  setIsedited,
  setShow,
  isModalOpen,
  setIsModalOpen,
}: any) => {
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
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      dispatch(removeZone1Row(index));
    }
  };

  const rowUpdateHandleFn = (rowData: DataRow, index: number) => {
    setSelectedRowData({ rowData, index });
    setShow(true);
    setIsedited(true);
  };

  return (
    <div className="card">
      <DataTableWrapper
        data={formData}
        columns={columns}
        handleDelete={rowDeleteHandleFn}
        handleUpdate={rowUpdateHandleFn}
        setShow={setShow}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export { WalkInZone1 };
