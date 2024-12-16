import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { KTIcon } from "../../../helpers";
import {
  setVisibleColumns,
  toggleColumn,
} from "../../../../app/store/zonesColumnSlice";

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

type DataTableWrapperProps = {
  data: DataRow[];
  columns: Column<DataRow>[];
  handleDelete: (index: number) => void;
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

const DataTableWrapper: React.FC<DataTableWrapperProps> = ({
  data,
  columns,
  handleDelete,
  isModalOpen,
  setIsModalOpen,
}: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();

  const totalPages = Math.max(Math.ceil(data.length / rowsPerPage), 1);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageClick = (pageNumber: number) => setCurrentPage(pageNumber);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleDeleteClick = (index: number) => {
    handleDelete(index);
  };

  const visibleColumns = useSelector(
    (state: RootState) => state.zonesColumns.visibleColumns
  );

  useEffect(() => {
    if (visibleColumns.length === 0) {
      const defaultColumns = columns
        .slice(0, 6)
        .map((col: any) => col.accessor);
      dispatch(setVisibleColumns(defaultColumns));
    }
  }, [dispatch, columns, visibleColumns]);

  return (
    <>
      <div className="card">
        <div className="card-body p-5">
          <div className="table-responsive">
            <table className="table table-row-dashed table-row-gray-300 align-middle gs-2 gy-2">
              <thead>
                <tr className="fw-bold text-muted bg-light text-nowrap">
                  {/* {columns.map((column: any) => (
                  <th key={column.accessor}>{column.label}</th>
                ))} */}
                  {visibleColumns.map((colKey) => {
                    const column = columns.find(
                      (col: any) => col.accessor === colKey
                    );
                    return <th key={colKey}>{column?.label}</th>;
                  })}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.length > 0 ? (
                  currentRows.map((row: any, index: any) => (
                    <tr key={index}>
                      {/* {columns.map((column: any) => (
                      <td key={column.accessor}>{row[column.accessor]}</td>
                    ))} */}
                      {visibleColumns.map((colKey) => {
                        return <td key={colKey}>{row[colKey]}</td>;
                      })}
                      <td className="d-flex gap-2">
                        <button className="btn btn-icon btn-sm btn-warning me-2">
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          className="btn btn-icon btn-sm btn-danger"
                          onClick={() => handleDeleteClick(index)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={columns.length + 1} className="text-center">
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <div className="d-flex justify-content-end align-items-center">
              <label htmlFor="rowsPerPage" className="me-2 text-nowrap">
                Rows per page:
              </label>
              <select
                id="rowsPerPage"
                className="form-select form-select-sm"
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
              >
                {[5, 10, 20, 50].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <nav aria-label="Table pagination">
              <ul className="pagination">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    aria-label="Previous page"
                    onClick={handlePrevPage}
                  >
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <li
                      key={pageNumber}
                      className={`page-item ${
                        pageNumber === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link rounded-circle"
                        aria-label={`Go to page ${pageNumber}`}
                        onClick={() => handlePageClick(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    </li>
                  );
                })}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    aria-label="Next page"
                    onClick={handleNextPage}
                  >
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div>
        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "400px",
              maxHeight: "70vh",
              backgroundColor: "white",
              border: "1px solid black",
              zIndex: 9999,
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                position: "sticky",
                top: 0,
                backgroundColor: "white",
                padding: "5px 15px",
                borderBottom: "1px solid #ddd",
                zIndex: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3 className="mb-0">Select Columns to Display</h3>
              <button
                className="btn btn-sm btn-icon btn-active-color-primary"
                onClick={() => setIsModalOpen(false)}
              >
                <KTIcon
                  className="fs-2hx text-gray-700 text-hover-primary"
                  iconName="cross"
                  iconType="solid"
                />
              </button>
            </div>
            <div
              style={{
                overflowY: "scroll",
                maxHeight: "50vh",
                padding: "10px 15px",
              }}
            >
              {columns.map((col: any) => (
                <div
                  key={col.accessor}
                  className="form-check form-check-custom form-check-solid form-check-sm mb-3"
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={visibleColumns.includes(col.accessor)}
                    onChange={() => dispatch(toggleColumn(col.accessor))}
                  />
                  <label className="form-check-label">{col.label}</label>
                </div>
              ))}
            </div>
          </div>
        )}

        {isModalOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={() => setIsModalOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export { DataTableWrapper };
