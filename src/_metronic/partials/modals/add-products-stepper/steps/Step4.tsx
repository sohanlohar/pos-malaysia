import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step4 = ({ selectedProduct }: any) => {
  const { setFieldValue } = useFormikContext();

  const [fieldFocus, setFieldFocus] = useState({
    governmentServiceTax: false,
    gstTax: false,
    financialNonFinancial: false,
    staffDiscount: false,
    fixedAmountPerTrxn: false,
    percentageValue: false,
    ratePOS: false,
    ratePOSOnline: false,
    customerPay: false,
    incentiveStaffPO: false,
    agencyPay: false,
  });

  useEffect(() => {
    if (selectedProduct) {
      const fields = [
        "governmentServiceTax",
        "gstTax",
        "financialNonFinancial",
        "staffDiscount",
        "fixedAmountPerTrxn",
        "percentageValue",
        "ratePOS",
        "ratePOSOnline",
        "customerPay",
        "incentiveStaffPO",
        "agencyPay",
      ];

      fields.forEach((field) => {
        if (selectedProduct[field] !== undefined) {
          setFieldValue(field, selectedProduct[field]);
        }
      });
    }
  }, [selectedProduct, setFieldValue]);

  const handleFocus = (fieldName: string, isFocused: boolean) => {
    setFieldFocus((prevState) => ({
      ...prevState,
      [fieldName]: isFocused,
    }));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="governmentServiceTax"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("governmentServiceTax", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("governmentServiceTax", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Government Service Tax 6%
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="governmentServiceTax"
            className={`floating-label ${
              fieldFocus.governmentServiceTax ? "active" : ""
            }`}
          >
            Government Service Tax 6%
          </label>
          <ErrorMessage
            name="governmentServiceTax"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="gstTax"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("gstTax", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("gstTax", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select GST
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="gstTax"
            className={`floating-label ${fieldFocus.gstTax ? "active" : ""}`}
          >
            GST
          </label>
          <ErrorMessage
            name="gstTax"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="financialNonFinancial"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("financialNonFinancial", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("financialNonFinancial", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Financial or Non-Financial
            </option>
            <option value="Financial">Financial</option>
            <option value="Non-Financial">Non-Financial</option>
          </Field>
          <label
            htmlFor="financialNonFinancial"
            className={`floating-label ${
              fieldFocus.financialNonFinancial ? "active" : ""
            }`}
          >
            Financial or Non-Financial
          </label>
          <ErrorMessage
            name="financialNonFinancial"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="staffDiscount"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.staffDiscount ? "" : "Staff Discount"}
            onFocus={() => handleFocus("staffDiscount", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("staffDiscount", !!e.target.value)
            }
          />
          <label
            htmlFor="staffDiscount"
            className={`floating-label ${
              fieldFocus.staffDiscount ? "active" : ""
            }`}
          >
            Staff Discount
          </label>
          <ErrorMessage
            name="staffDiscount"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="fixedAmountPerTrxn"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.fixedAmountPerTrxn ? "" : "Fixed Amount Per Trxn"
            }
            onFocus={() => handleFocus("fixedAmountPerTrxn", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("fixedAmountPerTrxn", !!e.target.value)
            }
          />
          <label
            htmlFor="fixedAmountPerTrxn"
            className={`floating-label ${
              fieldFocus.fixedAmountPerTrxn ? "active" : ""
            }`}
          >
            Fixed Amount Per Trxn
          </label>
          <ErrorMessage
            name="fixedAmountPerTrxn"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="percentageValue"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.percentageValue ? "" : "Percentage on Value"
            }
            onFocus={() => handleFocus("percentageValue", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("percentageValue", !!e.target.value)
            }
          />
          <label
            htmlFor="percentageValue"
            className={`floating-label ${
              fieldFocus.percentageValue ? "active" : ""
            }`}
          >
            Percentage on Value
          </label>
          <ErrorMessage
            name="percentageValue"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="ratePOS"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.ratePOS ? "" : "Rate (POS 24)"}
            onFocus={() => handleFocus("ratePOS", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("ratePOS", !!e.target.value)
            }
          />
          <label
            htmlFor="ratePOS"
            className={`floating-label ${fieldFocus.ratePOS ? "active" : ""}`}
          >
            Rate (POS 24)
          </label>
          <ErrorMessage
            name="ratePOS"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="ratePOSOnline"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.ratePOSOnline ? "" : "Rate POS Online"}
            onFocus={() => handleFocus("ratePOSOnline", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("ratePOSOnline", !!e.target.value)
            }
          />
          <label
            htmlFor="ratePOSOnline"
            className={`floating-label ${
              fieldFocus.ratePOSOnline ? "active" : ""
            }`}
          >
            Rate POS Online
          </label>
          <ErrorMessage
            name="ratePOSOnline"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="customerPay"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("customerPay", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("customerPay", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Customer Pay
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="customerPay"
            className={`floating-label ${
              fieldFocus.customerPay ? "active" : ""
            }`}
          >
            Customer Pay
          </label>
          <ErrorMessage
            name="customerPay"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="incentiveStaffPO"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.incentiveStaffPO ? "" : "Incentive to staff/PO"
            }
            onFocus={() => handleFocus("incentiveStaffPO", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("incentiveStaffPO", !!e.target.value)
            }
          />
          <label
            htmlFor="incentiveStaffPO"
            className={`floating-label ${
              fieldFocus.incentiveStaffPO ? "active" : ""
            }`}
          >
            Incentive to staff/PO
          </label>
          <ErrorMessage
            name="incentiveStaffPO"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="agencyPay"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("agencyPay", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("agencyPay", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Agency Pay
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="agencyPay"
            className={`floating-label ${fieldFocus.agencyPay ? "active" : ""}`}
          >
            Agency Pay
          </label>
          <ErrorMessage
            name="agencyPay"
            component="div"
            className="error-message"
          />
        </div>
      </div>
    </>
  );
};

export { Step4 };
