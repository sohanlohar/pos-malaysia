import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step4 = ({ selectedProduct }: any) => {
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
  }, [selectedProduct, setFieldValue]);

  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-4 floating-label-container">
          <label htmlFor="governmentServiceTax">
            Government Service Tax 6%
          </label>
          <Field
            as="select"
            name="governmentServiceTax"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Government Service Tax 6%
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
          <label htmlFor="gstTax">GST</label>
          <Field
            as="select"
            name="gstTax"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select GST
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
          <label htmlFor="financialNonFinancial">
            Financial or Non-Financial
          </label>
          <Field
            as="select"
            name="financialNonFinancial"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Financial or Non-Financial
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
          <label htmlFor="staffDiscount">Staff Discount</label>
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
          <label htmlFor="fixedAmountPerTrxn">Fixed Amount Per Trxn</label>
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
          <label htmlFor="percentageValue">Percentage on Value</label>
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
          <label htmlFor="ratePOS">Rate (POS 24)</label>
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
          <label htmlFor="ratePOSOnline">Rate POS Online</label>
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
          <label htmlFor="customerPay">Customer Pay</label>
          <Field
            as="select"
            name="customerPay"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Customer Pay
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
          <label htmlFor="incentiveStaffPO">Incentive to staff/PO</label>
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
          <label htmlFor="agencyPay">Agency Pay</label>
          <Field
            as="select"
            name="agencyPay"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Agency Pay
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

export { Step4 };
