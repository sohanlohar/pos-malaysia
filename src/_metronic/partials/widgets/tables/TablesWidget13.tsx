import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { Content } from "../../../layout/components/content";
import { removeFormData } from "../../../../app/store/poslajuProductSlice";
import { useDispatch } from "react-redux";
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
  commissionProductCode: string;
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
  accountCode3: string;
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
  const [tableData, setTableData] = useState<FormValues[]>([]);
  const formData = useSelector((state: RootState) => state.poslajuProduct.formData);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<FormValues | null>(
    null
  );
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [isEdited, setIsedited] = useState(false);

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
    { label: "Commission Product Code", accessor: "commissionProductCode" },
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
    { label: "Account Code 3", accessor: "accountCode3" },
    { label: "Posting Key 5", accessor: "postingKey5" },
    { label: "Account Code 4", accessor: "accountCode4" },
    { label: "Rate 3", accessor: "rate3" },
    { label: "Rule", accessor: "rule" },
    { label: "GST Effective Date 3", accessor: "GSTEffectiveDate3" },
    { label: "GST Tax Code 3", accessor: "gSTTaxCode3" },
    { label: "GST Inclusive 3", accessor: "gSTInclusive3" },
    { label: "Payment Frequency", accessor: "paymentFrequency" },
    { label: "Gross Net Payment", accessor: "grossNetPayment" },
    { label: "Actions", accessor: "actions" },
  ];

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData") || "[]");
    if (!formData?.length && storedData?.length) {
      setTableData(storedData);
    } else {
      setTableData(formData || []);
    }
  }, [formData]);

  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

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
      const updatedData = tableData.filter(
        (row) => row.productCode !== item.productCode
      );
      setTableData(updatedData);
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
        <div className="card-header border-0 pt-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label fw-bold fs-3 mb-1">Recent Orders</span>
            <span className="text-muted mt-1 fw-semibold fs-7">
              Over {tableData.length} orders
            </span>
          </h3>
        </div>
        <div className="card-body py-3">
          <div className="table-responsive">
            <table className="table table-row-dashed table-row-gray-300 align-middle  gs-4 gy-4">
              <thead>
                <tr className="fw-bold text-muted bg-light text-nowrap">
                  {columns.map((col) => (
                    <th key={col.accessor}>{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentRows.length > 0 ? (
                  currentRows.map((data: any, index: number) => {
                    return (
                      <tr key={index}>
                        {columns.map((col) => {
                          if (col.accessor === "actions") {
                            return (
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
                            );
                          }
                          const tData = data[col.accessor] || "--";
                          return <td key={col.accessor}>{tData}</td>;
                        })}
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
    </Content>
  );
};

export { TablesWidget13 };
