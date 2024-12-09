import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import {
  setVisibleColumns,
  toggleColumn,
} from "../../../../app/store/columnSlice";
import { removeFormData } from "../../../../app/store/poslajuProductSlice";
import { KTIcon } from "../../../helpers";
import { Content } from "../../../layout/components/content";
import { AddProductModel } from "../../modals/add-products-stepper/AddProductModel";

interface FormValues {
  productCode: string;
  productDescription: string;
  parentCode: string;
  parentDescription: string;
  shortDisplayName: string;
  glCustomerVendorDescription: string;
  agencyName1: string;
  agencyName2: string;
  pantasKodKKWT: string;
  postingKey: string;
  financialStatus: string;
  // commissionProductCode: string;
  cash: string;
  debitCard: string;
  creditCardNotOnUs: string;
  creditCardOnUs: string;
  cheque: string;
  bankersCheque: string;
  imprest: string;
  lpo: string;
  soda: string;
  irc: string;
  touchNGo: string;
  deferredPayment: string;
  voucher: string;
  eWallet: string;
  qRPay: string;
  posLoyaltyReward: string;
  gstTax: string;
  governmentServiceTax: string;
  realRewards: string;
  financialNonFinancial: string;
  staffDiscount: string;
  fixedAmountPerTrxn: string;
  percentageValue: string;
  ratePOS: string;
  ratePOSOnline: string;
  customerPay: string;
  incentiveStaffPO: string;
  agencyPay: string;
  documentType: string;
  postingKey2: string;
  accountCode: string;
  gSTEffectiveDate: string;
  gSTTaxCode: string;
  gSTInclusive: string;
  mBBIndictor: string;
  postingKey3: string;
  accountCodeCustomerPay: string;
  rate2: string;
  rules: string;
  GSTEffectiveDate2: string;
  gSTTaxCode2: string;
  gSTInclusive2: string;
  documentType2: string;
  postingKey4: string;
  accountCodePrd3: string;
  postingKey5: string;
  accountCode4: string;
  rate3: string;
  rule: string;
  GSTEffectiveDate3: string;
  gSTTaxCode3: string;
  gSTInclusive3: string;
  paymentFrequency: string;
  grossNetPayment: string;
}

type Props = {
  className: string;
};

const TablesWidget13: React.FC<Props> = ({ className }) => {
  const formData = useSelector(
    (state: RootState) => state.poslajuProduct.formData
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<FormValues | null>(
    null
  );
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isEdited, setIsedited] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { label: "Product Code", accessor: "productCode" },
    { label: "Product Description", accessor: "productDescription" },
    { label: "Parent Code", accessor: "parentCode" },
    { label: "Parent Description", accessor: "parentDescription" },
    { label: "Short Display Name", accessor: "shortDisplayName" },
    {
      label: "GL Customer Vendor Description",
      accessor: "glCustomerVendorDescription",
    },
    { label: "Agency Name 1", accessor: "agencyName1" },
    { label: "Agency Name 2", accessor: "agencyName2" },
    { label: "Pantas Kod KKWT", accessor: "pantasKodKKWT" },
    { label: "Posting Key", accessor: "postingKey" },
    { label: "Financial Status", accessor: "financialStatus" },
    // { label: "Commission Product Code", accessor: "commissionProductCode" },
    { label: "Cash", accessor: "cash" },
    { label: "Debit Card", accessor: "debitCard" },
    { label: "Credit Card Not On Us", accessor: "creditCardNotOnUs" },
    { label: "Credit Card On Us", accessor: "creditCardOnUs" },
    { label: "Cheque", accessor: "cheque" },
    { label: "Banker's Cheque", accessor: "bankersCheque" },
    { label: "Imprest", accessor: "imprest" },
    { label: "LPO", accessor: "lpo" },
    { label: "Soda", accessor: "soda" },
    { label: "IRC", accessor: "irc" },
    { label: "Touch N Go", accessor: "touchNGo" },
    { label: "Deferred Payment", accessor: "deferredPayment" },
    { label: "Voucher", accessor: "voucher" },
    { label: "eWallet", accessor: "eWallet" },
    { label: "QR Pay", accessor: "qRPay" },
    { label: "POS Loyalty Reward", accessor: "posLoyaltyReward" },
    { label: "GST Tax", accessor: "gstTax" },
    { label: "Government Service Tax", accessor: "governmentServiceTax" },
    { label: "Real Rewards", accessor: "realRewards" },
    { label: "Financial Non-Financial", accessor: "financialNonFinancial" },
    { label: "Staff Discount", accessor: "staffDiscount" },
    { label: "Fixed Amount Per Trxn", accessor: "fixedAmountPerTrxn" },
    { label: "Percentage Value", accessor: "percentageValue" },
    { label: "Rate POS", accessor: "ratePOS" },
    { label: "Rate POS Online", accessor: "ratePOSOnline" },
    { label: "Customer Pay", accessor: "customerPay" },
    { label: "Incentive Staff PO", accessor: "incentiveStaffPO" },
    { label: "Agency Pay", accessor: "agencyPay" },
    { label: "Document Type", accessor: "documentType" },
    { label: "Posting Key 2", accessor: "postingKey2" },
    { label: "Account Code", accessor: "accountCode" },
    { label: "GST Effective Date", accessor: "gSTEffectiveDate" },
    { label: "GST Tax Code", accessor: "gSTTaxCode" },
    { label: "GST Inclusive", accessor: "gSTInclusive" },
    { label: "MBB Indicator", accessor: "mBBIndictor" },
    { label: "Posting Key 3", accessor: "postingKey3" },
    { label: "Account Code Customer Pay", accessor: "accountCodeCustomerPay" },
    { label: "Rate 2", accessor: "rate2" },
    { label: "Rules", accessor: "rules" },
    { label: "GST Effective Date 2", accessor: "GSTEffectiveDate2" },
    { label: "GST Tax Code 2", accessor: "gSTTaxCode2" },
    { label: "GST Inclusive 2", accessor: "gSTInclusive2" },
    { label: "Document Type 2", accessor: "documentType2" },
    { label: "Posting Key 4", accessor: "postingKey4" },
    { label: "Account Code PRD", accessor: "accountCodePrd3" },
    { label: "Posting Key 5", accessor: "postingKey5" },
    { label: "Account Code 4", accessor: "accountCode4" },
    { label: "Rate 3", accessor: "rate3" },
    { label: "Rule", accessor: "rule" },
    { label: "GST Effective Date 3", accessor: "GSTEffectiveDate3" },
    { label: "GST Tax Code 3", accessor: "gSTTaxCode3" },
    { label: "GST Inclusive 3", accessor: "gSTInclusive3" },
    { label: "Payment Frequency", accessor: "paymentFrequency" },
    { label: "Gross Net Payment", accessor: "grossNetPayment" },
  ];

  const visibleColumns = useSelector(
    (state: RootState) => state.columns.visibleColumns
  );

  useEffect(() => {
    if (visibleColumns.length === 0) {
      const defaultColumns = columns.slice(0, 6).map((col) => col.accessor);
      dispatch(setVisibleColumns(defaultColumns));
    }
  }, [dispatch, columns, visibleColumns]);

  const totalPages = Math.ceil(formData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentRows = formData.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleEdit = (item: any, index: any) => {
    setSelectedProduct(item);
    setEditIndex(index);
    setShowCreateAppModal(true);
    setIsedited(true);
  };

  const handleDelete = (item: any) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete?`);
    if (confirmDelete) {
      dispatch(removeFormData(item));
    }
  };

  return (
    <Content>
      <div className="d-flex justify-content-between py-6 align-items-center">
        <h2 className="mb-0">Poslaju Product</h2>
        <button
          onClick={() => setShowCreateAppModal(true)}
          className="btn btn-sm fw-bold btn-primary"
        >
          Add Product
        </button>
      </div>

      <AddProductModel
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
        selectedProduct={selectedProduct}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        isEdited={isEdited}
        setIsedited={setIsedited}
        setSelectedProduct={setSelectedProduct}
      />
      <div className={`card ${className}`}>
        <div className="card-header border-0 pt-5 align-items-start justify-content-end">
          <button
            className="btn btn-primary btn-sm"
            onClick={() => setIsModalOpen(true)}
          >
            View Columns
          </button>
        </div>
        <div className="card-body py-3">
          <div className="table-responsive">
            <table className="table table-row-dashed table-row-gray-300 align-middle  gs-4 gy-4">
              <thead>
                <tr className="fw-bold text-muted bg-light text-nowrap">
                  {visibleColumns.map((colKey) => {
                    const column = columns.find(
                      (col) => col.accessor === colKey
                    );
                    return <th key={colKey}>{column?.label}</th>;
                  })}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.length > 0 ? (
                  currentRows.map((data: any, index: number) => {
                    return (
                      <tr key={index}>
                        {visibleColumns.map((colKey) => {
                          return <td key={colKey}>{data[colKey]}</td>;
                        })}
                        <td key="actions" className="d-flex gap-2">
                          <button
                            className="btn btn-icon btn-sm btn-warning me-2"
                            onClick={() => handleEdit(data, index)}
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button
                            className="btn btn-icon btn-sm btn-danger"
                            onClick={() => handleDelete(data)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={columns.length}
                      style={{ textAlign: "center" }}
                    >
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
              {columns.map((col) => (
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
    </Content>
  );
};

export { TablesWidget13 };
