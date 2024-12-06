import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step2 = ({ selectedProduct }: any) => {
  const { setFieldValue } = useFormikContext();

  const [fieldFocus, setFieldFocus] = useState({
    cash: false,
    debitCard: false,
    creditCardNotOnUs: false,
    creditCardOnUs: false,
    cheque: false,
    bankersCheque: false,
    imprest: false,
    lpo: false,
    soda: false,
    irc: false,
    touchNGo: false,
    deferredPayment: false,
    voucher: false,
    eWallet: false,
    qRPay: false,
    documentType2: false,
    postingKey4: false,
    accountCode3: false,
    accountCode4: false,
    rate3: false,
    rule: false,
    GSTEffectiveDate3: false,
    gSTTaxCode3: false,
    paymentFrequency: false,
    grossNetPayment: false,
    gSTInclusive: false,
    mBBIndictor: false,
  });

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
        "documentType2",
        "postingKey4",
        "accountCode3",
        "accountCode4",
        "rate3",
        "rule",
        "GSTEffectiveDate3",
        "gSTTaxCode3",
        "paymentFrequency",
        "grossNetPayment",
        "gSTInclusive",
        "mBBIndictor",
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
            name="cash"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("cash", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("cash", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Cash Option
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="cash"
            className={`floating-label ${fieldFocus.cash ? "active" : ""}`}
          >
            Cash
          </label>
          <ErrorMessage name="cash" component="div" className="error-message" />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="creditCardOnUs"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("creditCardOnUs", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("creditCardOnUs", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Credit Card (On us)
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="creditCardOnUs"
            className={`floating-label ${
              fieldFocus.creditCardOnUs ? "active" : ""
            }`}
          >
            Credit Card (On us)
          </label>
          <ErrorMessage
            name="creditCardOnUs"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="creditCardNotOnUs"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("creditCardNotOnUs", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("creditCardNotOnUs", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Credit Card (Not on Us)
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="creditCardNotOnUs"
            className={`floating-label ${
              fieldFocus.creditCardNotOnUs ? "active" : ""
            }`}
          >
            Credit Card (Not on Us)
          </label>
          <ErrorMessage
            name="creditCardNotOnUs"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="debitCard"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("debitCard", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("debitCard", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Debit Card
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="debitCard"
            className={`floating-label ${fieldFocus.debitCard ? "active" : ""}`}
          >
            Select Debit Card
          </label>
          <ErrorMessage
            name="debitCard"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="cheque"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("cheque", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("cheque", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Cheque
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="cheque"
            className={`floating-label ${fieldFocus.cheque ? "active" : ""}`}
          >
            Cheque
          </label>
          <ErrorMessage
            name="cheque"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="bankersCheque"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("bankersCheque", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("bankersCheque", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Banker's Cheque
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="bankersCheque"
            className={`floating-label ${
              fieldFocus.bankersCheque ? "active" : ""
            }`}
          >
            Banker's Cheque
          </label>
          <ErrorMessage
            name="bankersCheque"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="imprest"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("imprest", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("imprest", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Imprest
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="imprest"
            className={`floating-label ${fieldFocus.imprest ? "active" : ""}`}
          >
            Imprest
          </label>
          <ErrorMessage
            name="imprest"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="lpo"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("lpo", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("lpo", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select LPO
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="lpo"
            className={`floating-label ${fieldFocus.lpo ? "active" : ""}`}
          >
            LPO
          </label>
          <ErrorMessage name="lpo" component="div" className="error-message" />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="soda"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.soda ? "" : "SoDA"}
            onFocus={() => handleFocus("soda", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("soda", !!e.target.value)
            }
          />
          <label
            htmlFor="soda"
            className={`floating-label ${fieldFocus.soda ? "active" : ""}`}
          >
            SoDA
          </label>
          <ErrorMessage name="soda" component="div" className="error-message" />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="irc"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.irc ? "" : "IRC"}
            onFocus={() => handleFocus("irc", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("irc", !!e.target.value)
            }
          />
          <label
            htmlFor="irc"
            className={`floating-label ${fieldFocus.irc ? "active" : ""}`}
          >
            IRC
          </label>
          <ErrorMessage name="irc" component="div" className="error-message" />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="touchNGo"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("touchNGo", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("touchNGo", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Touch N Go
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="touchNGo"
            className={`floating-label ${fieldFocus.touchNGo ? "active" : ""}`}
          >
            Select Touch N Go
          </label>
          <ErrorMessage
            name="touchNGo"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="deferredPayment"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("deferredPayment", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("deferredPayment", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Deferred Payment
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="deferredPayment"
            className={`floating-label ${
              fieldFocus.deferredPayment ? "active" : ""
            }`}
          >
            Select Deferred Payment
          </label>
          <ErrorMessage
            name="deferredPayment"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="voucher"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("voucher", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("voucher", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Voucher (to be)
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="voucher"
            className={`floating-label ${fieldFocus.voucher ? "active" : ""}`}
          >
            Voucher (to be)
          </label>
          <ErrorMessage
            name="voucher"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="eWallet"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("eWallet", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("eWallet", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select eWallet
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="eWallet"
            className={`floating-label ${fieldFocus.eWallet ? "active" : ""}`}
          >
            eWallet
          </label>
          <ErrorMessage
            name="eWallet"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            as="select"
            name="qRPay"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("qRPay", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("qRPay", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select QR Pay
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="qRPay"
            className={`floating-label ${fieldFocus.qRPay ? "active" : ""}`}
          >
            QR Pay
          </label>
          <ErrorMessage
            name="qRPay"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="documentType2"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.documentType2 ? "" : "Document Type"}
            onFocus={() => handleFocus("documentType2", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("documentType2", !!e.target.value)
            }
          />
          <label
            htmlFor="documentType2"
            className={`floating-label ${
              fieldFocus.documentType2 ? "active" : ""
            }`}
          >
            Document Type
          </label>
          <ErrorMessage
            name="documentType2"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="postingKey4"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.postingKey4 ? "" : "Posting Key"}
            onFocus={() => handleFocus("postingKey4", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("postingKey4", !!e.target.value)
            }
          />
          <label
            htmlFor="postingKey4"
            className={`floating-label ${
              fieldFocus.postingKey4 ? "active" : ""
            }`}
          >
            Posting Key
          </label>
          <ErrorMessage
            name="postingKey4"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="accountCode3"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.accountCode3 ? "" : "Account Code"}
            onFocus={() => handleFocus("accountCode3", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("accountCode3", !!e.target.value)
            }
          />
          <label
            htmlFor="accountCode3"
            className={`floating-label ${
              fieldFocus.accountCode3 ? "active" : ""
            }`}
          >
            Account Code
          </label>
          <ErrorMessage
            name="accountCode3"
            component="div"
            className="error-message"
          />
        </div>
        {/* <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="postingKey5"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.postingKey5 ? "" : "Posting Key"}
            onFocus={() => handleFocus("postingKey5", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("postingKey5", !!e.target.value)
            }
          />
          <label
            htmlFor="postingKey5"
            className={`floating-label ${
              fieldFocus.postingKey5 ? "active" : ""
            }`}
          >
            Posting Key
          </label>
          <ErrorMessage
            name="postingKey5"
            component="div"
            className="error-message"
          />
        </div> */}
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="accountCode4"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.accountCode4 ? "" : "Account Code"}
            onFocus={() => handleFocus("accountCode4", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("accountCode4", !!e.target.value)
            }
          />
          <label
            htmlFor="accountCode4"
            className={`floating-label ${
              fieldFocus.accountCode4 ? "active" : ""
            }`}
          >
            Account Code
          </label>
          <ErrorMessage
            name="accountCode4"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="rate3"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.rate3 ? "" : "Rate"}
            onFocus={() => handleFocus("rate3", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("rate3", !!e.target.value)
            }
          />
          <label
            htmlFor="rate3"
            className={`floating-label ${fieldFocus.rate3 ? "active" : ""}`}
          >
            Rate
          </label>
          <ErrorMessage
            name="rate3"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="rule"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.rule ? "" : "Rule"}
            onFocus={() => handleFocus("rule", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("rule", !!e.target.value)
            }
          />
          <label
            htmlFor="rule"
            className={`floating-label ${fieldFocus.rule ? "active" : ""}`}
          >
            Rule
          </label>
          <ErrorMessage name="rule" component="div" className="error-message" />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="GSTEffectiveDate3"
            type="date"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("GSTEffectiveDate3", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("GSTEffectiveDate3", !!e.target.value)
            }
          />
          <label
            htmlFor="GSTEffectiveDate3"
            className={`floating-label ${
              fieldFocus.GSTEffectiveDate3 ? "active" : ""
            }`}
          >
            GST Effective Date
          </label>
          <ErrorMessage
            name="GSTEffectiveDate3"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="gSTTaxCode3"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.gSTTaxCode3 ? "" : "GST Tax Code"}
            onFocus={() => handleFocus("gSTTaxCode3", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("gSTTaxCode3", !!e.target.value)
            }
          />
          <label
            htmlFor="gSTTaxCode3"
            className={`floating-label ${
              fieldFocus.gSTTaxCode3 ? "active" : ""
            }`}
          >
            GST Tax Code
          </label>
          <ErrorMessage
            name="gSTTaxCode3"
            component="div"
            className="error-message"
          />
        </div>
        {/* <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="gSTInclusive3"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.gSTInclusive3 ? "" : "GST inclusive"}
            onFocus={() => handleFocus("gSTInclusive3", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("gSTInclusive3", !!e.target.value)
            }
          />
          <label
            htmlFor="gSTInclusive3"
            className={`floating-label ${
              fieldFocus.gSTInclusive3 ? "active" : ""
            }`}
          >
            GST inclusive
          </label>
          <ErrorMessage
            name="gSTInclusive3"
            component="div"
            className="error-message"
          />
        </div> */}
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="paymentFrequency"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.paymentFrequency ? "" : "GST inclusive"}
            onFocus={() => handleFocus("paymentFrequency", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("paymentFrequency", !!e.target.value)
            }
          />
          <label
            htmlFor="paymentFrequency"
            className={`floating-label ${
              fieldFocus.paymentFrequency ? "active" : ""
            }`}
          >
            GST inclusive
          </label>
          <ErrorMessage
            name="paymentFrequency"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="grossNetPayment"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.grossNetPayment ? "" : "gross / net payment"
            }
            onFocus={() => handleFocus("grossNetPayment", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("grossNetPayment", !!e.target.value)
            }
          />
          <label
            htmlFor="grossNetPayment"
            className={`floating-label ${
              fieldFocus.grossNetPayment ? "active" : ""
            }`}
          >
            gross / net payment
          </label>
          <ErrorMessage
            name="grossNetPayment"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="gSTInclusive"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.gSTInclusive ? "" : "GST inclusive (1,0)"}
            onFocus={() => handleFocus("gSTInclusive", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("gSTInclusive", !!e.target.value)
            }
          />
          <label
            htmlFor="gSTInclusive"
            className={`floating-label ${
              fieldFocus.gSTInclusive ? "active" : ""
            }`}
          >
            GST inclusive (1,0)
          </label>
          <ErrorMessage
            name="gSTInclusive"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="mBBIndictor"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.mBBIndictor ? "" : "MBB- Indictor for Rounding"
            }
            onFocus={() => handleFocus("mBBIndictor", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("mBBIndictor", !!e.target.value)
            }
          />
          <label
            htmlFor="mBBIndictor"
            className={`floating-label ${
              fieldFocus.mBBIndictor ? "active" : ""
            }`}
          >
            MBB- Indictor for Rounding
          </label>
          <ErrorMessage
            name="mBBIndictor"
            component="div"
            className="error-message"
          />
        </div>
      </div>
    </>
  );
};

export { Step2 };

