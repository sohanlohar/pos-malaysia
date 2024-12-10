import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step5 = ({ selectedProduct, isEdited }: any) => {
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (selectedProduct) {
      const fields = [
        "documentType",
        "postingKey2",
        "accountCode",
        "gSTEffectiveDate",
        "gSTTaxCode",
        "gSTInclusive3",
        "mBBIndictor",
        "postingKey3",
        "accountCodeCustomerPay",
        "rate2",
        "rules",
        "GSTEffectiveDate2",
        "gSTTaxCode2",
        "gSTInclusive2",
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
          {isEdited && <label htmlFor="documentType">Document Type</label>}
          <Field
            name="documentType"
            type="text"
            className="form-control floating-label-input"
            placeholder="Document Type"
          />
          <ErrorMessage
            name="documentType"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="postingKey2">Posting Key SAP</label>}
          <Field
            name="postingKey2"
            type="text"
            className="form-control floating-label-input"
            placeholder="Posting Key SAP"
          />
          <ErrorMessage
            name="postingKey2"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="accountCode">Account Code</label>}
          <Field
            name="accountCode"
            type="text"
            className="form-control floating-label-input"
            placeholder="Account Code"
          />
          <ErrorMessage
            name="accountCode"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="gSTEffectiveDate">GST Effective Date</label>
          )}
          <Field
            name="gSTEffectiveDate"
            type="date"
            className="form-control floating-label-input"
          />
          <ErrorMessage
            name="gSTEffectiveDate"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="gSTTaxCode">GST Tax code (SR, ZR, ES, OS)</label>
          )}
          <Field
            name="gSTTaxCode"
            type="text"
            className="form-control floating-label-input"
            placeholder="GST Tax code (SR, ZR, ES, OS)"
          />
          <ErrorMessage
            name="gSTTaxCode"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="gSTInclusive3">GST inclusive</label>}
          <Field
            name="gSTInclusive3"
            type="text"
            className="form-control floating-label-input"
            placeholder="GST inclusive"
          />
          <ErrorMessage
            name="gSTInclusive3"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="mBBIndictor">MBB- Indictor for Rounding</label>
          )}
          <Field
            name="mBBIndictor"
            type="text"
            className="form-control floating-label-input"
            placeholder="MBB- Indictor for Rounding"
          />
          <ErrorMessage
            name="mBBIndictor"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="postingKey3">Posting Key 3</label>}
          <Field
            name="postingKey3"
            type="text"
            className="form-control floating-label-input"
            placeholder="Posting Key 3"
          />
          <ErrorMessage
            name="postingKey3"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="accountCodeCustomerPay">
              Account Code (Customer Pay)
            </label>
          )}
          <Field
            name="accountCodeCustomerPay"
            type="text"
            className="form-control floating-label-input"
            placeholder="Account Code (Customer Pay)"
          />
          <ErrorMessage
            name="accountCodeCustomerPay"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="rate2">Rate 2</label>}
          <Field
            name="rate2"
            type="text"
            className="form-control floating-label-input"
            placeholder="Rate 2"
          />
          <ErrorMessage
            name="rate2"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="rules">Rules</label>}
          <Field
            name="rules"
            type="text"
            className="form-control floating-label-input"
            placeholder="Rules"
          />
          <ErrorMessage
            name="rules"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="GSTEffectiveDate2">GST Effective Date</label>
          )}
          <Field
            name="GSTEffectiveDate2"
            type="date"
            className="form-control floating-label-input"
          />
          <ErrorMessage
            name="GSTEffectiveDate2"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="gSTTaxCode2">GST Tax code (SR, ZR, ES, OS)</label>
          )}
          <Field
            name="gSTTaxCode2"
            type="text"
            className="form-control floating-label-input"
            placeholder="GST Tax code (SR, ZR, ES, OS)"
          />
          <ErrorMessage
            name="gSTTaxCode2"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="gSTInclusive2">GST inclusive (1,0)</label>
          )}
          <Field
            name="gSTInclusive2"
            type="text"
            className="form-control floating-label-input"
            placeholder="GST inclusive (1,0)"
          />
          <ErrorMessage
            name="gSTInclusive2"
            component="div"
            className="error-message"
          />
        </div>
      </div>
    </>
  );
};

export { Step5 };
