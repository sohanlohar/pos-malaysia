import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step2 = ({ selectedProduct, isEdited }: any) => {
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (selectedProduct) {
      const fields = [
        "cash",
        "debitCard",
        "creditCardNotOnUs",
        "creditCardOnUs",
        "cheque",
        "bankersCheque",
        "imprest",
        "lpo",
        "soda",
        "irc",
        "touchNGo",
        "deferredPayment",
        "voucher",
        "eWallet",
        "qRPay",
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
          {isEdited && <label htmlFor="cash">Cash</label>}
          <Field
            as="select"
            name="cash"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Cash Option
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage name="cash" component="div" className="error-message" />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="creditCardOnUs">Credit Card (On us)</label>
          )}
          <Field
            as="select"
            name="creditCardOnUs"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Credit Card (On us)
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="creditCardOnUs"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="creditCardNotOnUs">Credit Card (Not on Us)</label>
          )}
          <Field
            as="select"
            name="creditCardNotOnUs"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Credit Card (Not on Us)
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="creditCardNotOnUs"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="debitCard">Select Debit Card</label>}
          <Field
            as="select"
            name="debitCard"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Debit Card
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="debitCard"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="cheque">Cheque</label>}
          <Field
            as="select"
            name="cheque"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Cheque
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="cheque"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="bankersCheque">Banker's Cheque</label>}
          <Field
            as="select"
            name="bankersCheque"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Banker's Cheque
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="bankersCheque"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="imprest">Imprest</label>}
          <Field
            as="select"
            name="imprest"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Imprest
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="imprest"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="lpo">LPO</label>}
          <Field
            as="select"
            name="lpo"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select LPO
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage name="lpo" component="div" className="error-message" />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="soda">SoDA</label>}
          <Field
            name="soda"
            type="text"
            className="form-control floating-label-input"
            placeholder="SoDA"
          />
          <ErrorMessage name="soda" component="div" className="error-message" />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="irc">IRC</label>}
          <Field
            name="irc"
            type="text"
            className="form-control floating-label-input"
            placeholder="IRC"
          />
          <ErrorMessage name="irc" component="div" className="error-message" />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="touchNGo">Select Touch N Go</label>}
          <Field
            as="select"
            name="touchNGo"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Touch N Go
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="touchNGo"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && (
            <label htmlFor="deferredPayment">Select Deferred Payment</label>
          )}
          <Field
            as="select"
            name="deferredPayment"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Deferred Payment
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="deferredPayment"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="voucher">Voucher (to be)</label>}
          <Field
            as="select"
            name="voucher"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select Voucher (to be)
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="voucher"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="eWallet">eWallet</label>}
          <Field
            as="select"
            name="eWallet"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select eWallet
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="eWallet"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="qRPay">QR Pay</label>}
          <Field
            as="select"
            name="qRPay"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Select QR Pay
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="qRPay"
            component="div"
            className="error-message"
          />
        </div>
      </div>
    </>
  );
};

export { Step2 };
