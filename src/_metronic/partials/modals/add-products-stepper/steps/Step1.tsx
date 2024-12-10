import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect } from "react";

const Step1 = ({ selectedProduct, isEdited }: any) => {
  console.log("isEdited", isEdited);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (selectedProduct) {
      setFieldValue("productCode", selectedProduct.productCode);
      setFieldValue("productDescription", selectedProduct.productDescription);
      setFieldValue("parentCode", selectedProduct.parentCode);
      setFieldValue("parentDescription", selectedProduct.parentDescription);
      setFieldValue("shortDisplayName", selectedProduct.shortDisplayName);
      setFieldValue(
        "glCustomerVendorDescription",
        selectedProduct.glCustomerVendorDescription
      );
      setFieldValue("agencyName1", selectedProduct.agencyName1);
      setFieldValue("agencyName2", selectedProduct.agencyName2);
      setFieldValue("pantasKodKKWT", selectedProduct.pantasKodKKWT);
      setFieldValue("postingKey", selectedProduct.postingKey);
      setFieldValue("financialStatus", selectedProduct.financialStatus);
      setFieldValue(
        "commissionProductCode",
        selectedProduct.commissionProductCode
      );
    }
  }, [selectedProduct, isEdited]);

  return (
    <>
      <div className="d-flex flex-row justify-content-between gap-4">
        <div className="fv-row mb-4 flex-fill floating-label-container w-25">
          {isEdited && <label htmlFor="productCode">Product Code</label>}
          <Field
            name="productCode"
            type="text"
            className="form-control floating-label-input"
            placeholder="Product Code"
          />
          <ErrorMessage
            name="productCode"
            component="div"
            className="error-message"
          />
        </div>

        <div className="fv-row mb-4 flex-fill floating-label-container w-75">
          {isEdited && (
            <label htmlFor="productDescription">Product Description</label>
          )}
          <Field
            name="productDescription"
            type="text"
            className="form-control floating-label-input"
            placeholder="Product Description"
          />
          <ErrorMessage
            name="productDescription"
            component="div"
            className="error-message"
          />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between gap-4">
        <div className="fv-row mb-4 flex-fill floating-label-container w-25">
          {isEdited && <label htmlFor="parentCode">Parent Code</label>}
          <Field
            name="parentCode"
            type="text"
            className="form-control floating-label-input"
            placeholder="Parent Code"
          />
          <ErrorMessage
            name="parentCode"
            component="div"
            className="error-message"
          />
        </div>

        <div className="fv-row mb-4 flex-fill floating-label-container w-75">
          {isEdited && (
            <label htmlFor="parentDescription">Parent Description</label>
          )}
          <Field
            name="parentDescription"
            type="text"
            className="form-control floating-label-input"
            placeholder="Parent Description"
          />
          <ErrorMessage
            name="parentDescription"
            component="div"
            className="error-message"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="shortDisplayName">Short Display Name</label>
          )}
          <Field
            name="shortDisplayName"
            type="text"
            className="form-control floating-label-input"
            placeholder="Short Display Name"
          />
          <ErrorMessage
            name="shortDisplayName"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="glCustomerVendorDescription">
              GL Customer Vendor Description
            </label>
          )}
          <Field
            name="glCustomerVendorDescription"
            type="text"
            className="form-control floating-label-input"
            placeholder="GL Customer Vendor Description"
          />
          <ErrorMessage
            name="glCustomerVendorDescription"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="agencyName1">Agency Name 1</label>}
          <Field
            name="agencyName1"
            type="text"
            className="form-control floating-label-input"
            placeholder="Agency Name 1"
          />
          <ErrorMessage
            name="agencyName1"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="agencyName2">Agency Name 2</label>}
          <Field
            name="agencyName2"
            type="text"
            className="form-control floating-label-input"
            placeholder="Agency Name 2"
          />
          <ErrorMessage
            name="agencyName2"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="pantasKodKKWT">Pantas Kod KKWT</label>}
          <Field
            name="pantasKodKKWT"
            type="text"
            className="form-control floating-label-input"
            placeholder="Pantas Kod KKWT"
          />
          <ErrorMessage
            name="pantasKodKKWT"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="postingKey">Posting Key SAP</label>}
          <Field
            name="postingKey"
            type="text"
            className="form-control floating-label-input"
            placeholder="Posting Key SAP"
          />
          <ErrorMessage
            name="postingKey"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="financialStatus">Select Financial Status</label>
          )}
          <Field
            as="select"
            name="financialStatus"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Financial Status
            </option>
            <option value="Financial">Financial</option>
            <option value="Non-Financial">Non-Financial</option>
          </Field>
          <ErrorMessage
            name="financialStatus"
            component="div"
            className="error-message"
          />
        </div>
      </div>
    </>
  );
};

export { Step1 };
