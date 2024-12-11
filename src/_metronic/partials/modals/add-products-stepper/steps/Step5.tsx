import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step5 = ({ selectedProduct, isEdited }: any) => {
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (selectedProduct) {
      const fields = [
        "documentType2",
        "postingKey4",
        "accountCodePrd3",
        "postingKey5",
        "accountCode4",
        "rate3",
        "rule",
        "GSTEffectiveDate3",
        "gSTTaxCode3",
        "gSTInclusive",
        "paymentFrequency",
        "grossNetPayment",
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
          {isEdited && <label htmlFor="documentType2">Document Type</label>}
          <Field
            name="documentType2"
            type="text"
            className="form-control floating-label-input"
            placeholder="Document Type"
          />
          <ErrorMessage
            name="documentType2"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="postingKey4">Posting Key</label>}
          <Field
            name="postingKey4"
            type="text"
            className="form-control floating-label-input"
            placeholder="Posting Key"
          />
          <ErrorMessage
            name="postingKey4"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="accountCodePrd3">Account Code PRD</label>
          )}
          <Field
            name="accountCodePrd3"
            type="text"
            className="form-control floating-label-input"
            placeholder="Account Code PRD"
          />
          <ErrorMessage
            name="accountCodePrd3"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="postingKey5">Posting Key</label>}
          <Field
            name="postingKey5"
            type="text"
            className="form-control floating-label-input"
            placeholder="Posting Key"
          />
          <ErrorMessage
            name="postingKey5"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="accountCode4">Account Code</label>}
          <Field
            name="accountCode4"
            type="text"
            className="form-control floating-label-input"
            placeholder="Account Code"
          />
          <ErrorMessage
            name="accountCode4"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="rate3">Rate</label>}
          <Field
            name="rate3"
            type="text"
            className="form-control floating-label-input"
            placeholder="Rate"
          />
          <ErrorMessage
            name="rate3"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="rule">Rule</label>}
          <Field
            name="rule"
            type="text"
            className="form-control floating-label-input"
            placeholder="Rule"
          />
          <ErrorMessage name="rule" component="div" className="error-message" />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="GSTEffectiveDate3">GST Effective Date</label>
          )}
          <Field
            name="GSTEffectiveDate3"
            type="date"
            className="form-control floating-label-input"
             placeholder="GST Effective Date"
          />
          <ErrorMessage
            name="GSTEffectiveDate3"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="gSTTaxCode3">GST Tax Code</label>}
          <Field
            name="gSTTaxCode3"
            type="text"
            className="form-control floating-label-input"
             placeholder="GST Effective Date"
          />
          <ErrorMessage
            name="gSTTaxCode3"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="paymentFrequency">Payment Frequency</label>
          )}
          <Field
            name="paymentFrequency"
            type="text"
            className="form-control floating-label-input"
             placeholder="Payment Frequency"
          />
          <ErrorMessage
            name="paymentFrequency"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="grossNetPayment">Gross / Net Payment</label>
          )}
          <Field
            name="grossNetPayment"
            type="text"
            className="form-control floating-label-input"
             placeholder="Gross / Net Payment"
          />
          <ErrorMessage
            name="grossNetPayment"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="gSTInclusive">GST inclusive (1,0)</label>
          )}
          <Field
            name="gSTInclusive"
            type="text"
            className="form-control floating-label-input"
             placeholder="GST inclusive (1,0)"
          />
          <ErrorMessage
            name="gSTInclusive"
            component="div"
            className="error-message"
          />
        </div>
      </div>
    </>
  );
};

export { Step5 };
