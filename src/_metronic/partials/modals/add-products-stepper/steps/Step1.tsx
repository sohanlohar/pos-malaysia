import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step1 = ({ selectedProduct, isEdited }: any) => {

  const { setFieldValue } = useFormikContext();

  const [fieldFocus, setFieldFocus] = useState({
    productCode: false,
    productDescription: false,
    parentCode: false,
    parentDescription: false,
    shortDisplayName: false,
    glCustomerVendorDescription: false,
    agencyName1: false,
    agencyName2: false,
    pantasKodKKWT: false,
    postingKey: false,
    financialStatus: false,
    commissionProductCode: false,
  });

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

  const handleFocus = (fieldName: string, isFocused: boolean) => {
    setFieldFocus((prevState) => ({
      ...prevState,
      [fieldName]: isFocused,
    }));
  };

  return (
    <>
      <div className="d-flex flex-row justify-content-between gap-4">
        <div className="fv-row mb-4 flex-fill floating-label-container w-25">
          <Field
            name="productCode"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.productCode ? "" : "Product Code"}
            onFocus={() => handleFocus("productCode", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("productCode", !!e.target.value)
            }
          />
          <label
            htmlFor="productCode"
            className={`floating-label ${
              fieldFocus.productCode ? "active" : ""
            }`}
          >
            Product Code
          </label>
          <ErrorMessage
            name="productCode"
            component="div"
            className="error-message"
          />
        </div>

        <div className="fv-row mb-4 flex-fill floating-label-container w-75">
          <Field
            name="productDescription"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.productDescription ? "" : "Product Description"
            }
            onFocus={() => handleFocus("productDescription", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("productDescription", !!e.target.value)
            }
          />
          <label
            htmlFor="productDescription"
            className={`floating-label ${
              fieldFocus.productDescription ? "active" : ""
            }`}
          >
            Product Description
          </label>
          <ErrorMessage
            name="productDescription"
            component="div"
            className="error-message"
          />
        </div>
      </div>
      <div className="d-flex flex-row justify-content-between gap-4">
        <div className="fv-row mb-4 flex-fill floating-label-container w-25">
          <Field
            name="parentCode"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.parentCode ? "" : "Parent Code"}
            onFocus={() => handleFocus("parentCode", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("parentCode", !!e.target.value)
            }
          />
          <label
            htmlFor="parentCode"
            className={`floating-label ${
              fieldFocus.parentCode ? "active" : ""
            }`}
          >
            Parent Code
          </label>
          <ErrorMessage
            name="parentCode"
            component="div"
            className="error-message"
          />
        </div>
        <div className="fv-row mb-4 flex-fill floating-label-container w-75">
          <Field
            name="parentDescription"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.parentDescription ? "" : "Parent Description"
            }
            onFocus={() => handleFocus("parentDescription", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("parentDescription", !!e.target.value)
            }
          />
          <label
            htmlFor="parentDescription"
            className={`floating-label ${
              fieldFocus.parentDescription ? "active" : ""
            }`}
          >
            Parent Description
          </label>
          <ErrorMessage
            name="parentDescription"
            component="div"
            className="error-message"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="shortDisplayName"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.shortDisplayName ? "" : "Short Display Name"
            }
            onFocus={() => handleFocus("shortDisplayName", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("shortDisplayName", !!e.target.value)
            }
          />
          <label
            htmlFor="shortDisplayName"
            className={`floating-label ${
              fieldFocus.shortDisplayName ? "active" : ""
            }`}
          >
            Short Display Name
          </label>
          <ErrorMessage
            name="shortDisplayName"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="glCustomerVendorDescription"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.glCustomerVendorDescription
                ? ""
                : "GL Customer Vendor Description"
            }
            onFocus={() => handleFocus("glCustomerVendorDescription", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("glCustomerVendorDescription", !!e.target.value)
            }
          />
          <label
            htmlFor="glCustomerVendorDescription"
            className={`floating-label ${
              fieldFocus.glCustomerVendorDescription ? "active" : ""
            }`}
          >
            GL Customer Vendor Description
          </label>
          <ErrorMessage
            name="glCustomerVendorDescription"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="agencyName1"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.agencyName1 ? "" : "Agency Name 1"}
            onFocus={() => handleFocus("agencyName1", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("agencyName1", !!e.target.value)
            }
          />
          <label
            htmlFor="agencyName1"
            className={`floating-label ${
              fieldFocus.agencyName1 ? "active" : ""
            }`}
          >
            Agency Name 1
          </label>
          <ErrorMessage
            name="agencyName1"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="agencyName2"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.agencyName2 ? "" : "Agency Name 2"}
            onFocus={() => handleFocus("agencyName2", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("agencyName2", !!e.target.value)
            }
          />
          <label
            htmlFor="agencyName2"
            className={`floating-label ${
              fieldFocus.agencyName2 ? "active" : ""
            }`}
          >
            Agency Name 2
          </label>
          <ErrorMessage
            name="agencyName2"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="pantasKodKKWT"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.pantasKodKKWT ? "" : "Pantas Kod KKWT"}
            onFocus={() => handleFocus("pantasKodKKWT", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("pantasKodKKWT", !!e.target.value)
            }
          />
          <label
            htmlFor="pantasKodKKWT"
            className={`floating-label ${
              fieldFocus.pantasKodKKWT ? "active" : ""
            }`}
          >
            Pantas Kod KKWT
          </label>
          <ErrorMessage
            name="pantasKodKKWT"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="postingKey"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.postingKey ? "" : "Posting Key SAP"}
            onFocus={() => handleFocus("postingKey", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("postingKey", !!e.target.value)
            }
          />
          <label
            htmlFor="postingKey"
            className={`floating-label ${
              fieldFocus.postingKey ? "active" : ""
            }`}
          >
            Posting Key SAP
          </label>
          <ErrorMessage
            name="postingKey"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="financialStatus"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("financialStatus", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("financialStatus", !!e.target.value)
            }
          >
            <option value="" disabled>
              {fieldFocus.financialStatus
                ? "Financial Status"
                : "Select Financial Status"}
            </option>
            <option value="Financial">Financial</option>
            <option value="Non-Financial">Non-Financial</option>
          </Field>
          <label
            htmlFor="financialStatus"
            className={`floating-label ${
              fieldFocus.financialStatus ? "active" : ""
            }`}
          >
            Select Financial Status
          </label>
          <ErrorMessage
            name="financialStatus"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="commissionProductCode"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.commissionProductCode ? "" : "Commission Product Code"
            }
            onFocus={() => handleFocus("commissionProductCode", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("commissionProductCode", !!e.target.value)
            }
          />
          <label
            htmlFor="commissionProductCode"
            className={`floating-label ${
              fieldFocus.commissionProductCode ? "active" : ""
            }`}
          >
            Commission Product Code
          </label>
          <ErrorMessage
            name="commissionProductCode"
            component="div"
            className="error-message"
          />
        </div>
      </div>
    </>
  );
};

export { Step1 };
