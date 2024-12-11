import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step3 = ({ selectedProduct, isEdited }: any) => {
  const { setFieldValue } = useFormikContext();

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
  }, [selectedProduct, isEdited]);

  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="governmentServiceTax">
              Include Government Service Tax
            </label>
          )}
          <Field
            as="select"
            name="governmentServiceTax"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Include Government Service Tax
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="governmentServiceTax"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="gstTax">GST Option</label>}
          <Field
            as="select"
            name="gstTax"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              GST Option
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="gstTax"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="financialNonFinancial">
              Select Transaction Type
            </label>
          )}
          <Field
            as="select"
            name="financialNonFinancial"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Transaction Type
            </option>
            <option value="Financial">Financial</option>
            <option value="Non-Financial">Non-Financial</option>
          </Field>
          <ErrorMessage
            name="financialNonFinancial"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="staffDiscount">Staff Discount</label>}
          <Field
            name="staffDiscount"
            type="text"
            className="form-control floating-label-input"
            placeholder="Staff Discount"
          />
          <ErrorMessage
            name="staffDiscount"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="fixedAmountPerTrxn">Fixed Amount Per Trxn</label>
          )}
          <Field
            name="fixedAmountPerTrxn"
            type="text"
            className="form-control floating-label-input"
            placeholder="Fixed Amount Per Trxn"
          />
          <ErrorMessage
            name="fixedAmountPerTrxn"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="percentageValue">Percentage on Value</label>
          )}
          <Field
            name="percentageValue"
            type="text"
            className="form-control floating-label-input"
            placeholder="Percentage on Value"
          />
          <ErrorMessage
            name="percentageValue"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="ratePOS">Rate (POS 24)</label>}
          <Field
            name="ratePOS"
            type="text"
            className="form-control floating-label-input"
            placeholder="Rate (POS 24)"
          />
          <ErrorMessage
            name="ratePOS"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="ratePOSOnline">Rate POS Online</label>}
          <Field
            name="ratePOSOnline"
            type="text"
            className="form-control floating-label-input"
            placeholder="Rate POS Online"
          />
          <ErrorMessage
            name="ratePOSOnline"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="customerPay">Customer Pay Option</label>}
          <Field
            as="select"
            name="customerPay"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Customer Pay Option
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="customerPay"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="incentiveStaffPO">Incentive to staff/PO</label>
          )}
          <Field
            name="incentiveStaffPO"
            type="text"
            className="form-control floating-label-input"
            placeholder="Incentive to staff/PO"
          />
          <ErrorMessage
            name="incentiveStaffPO"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="agencyPay">Agency Pay Option</label>}
          <Field
            as="select"
            name="agencyPay"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Agency Pay Option
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
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

export { Step3 };
