import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step6 = ({ selectedProduct }: any) => {
  const { setFieldValue } = useFormikContext();

  const [fieldFocus, setFieldFocus] = useState({
    documentType2: false,
    postingKey4: false,
    accountCodePrd3: false,
    postingKey5: false,
    accountCode4: false,
    rate3: false,
    rule: false,
    GSTEffectiveDate3: false,
    gSTTaxCode3: false,
    gSTInclusive: false,
    paymentFrequency: false,
    grossNetPayment: false,
  });

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
            name="accountCodePrd3"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.accountCodePrd3 ? "" : "Account Code PRD"}
            onFocus={() => handleFocus("accountCodePrd3", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("accountCodePrd3", !!e.target.value)
            }
          />
          <label
            htmlFor="accountCodePrd3"
            className={`floating-label ${
              fieldFocus.accountCodePrd3 ? "active" : ""
            }`}
          >
            Account Code PRD
          </label>
          <ErrorMessage
            name="accountCodePrd3"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
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
        </div>
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
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="paymentFrequency"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.paymentFrequency ? "" : "Payment Frequency"}
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
            Payment Frequency
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
              fieldFocus.grossNetPayment ? "" : "Gross / net payment"
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
            Gross / net payment
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
      </div>
    </>
  );
};

export { Step6 };
