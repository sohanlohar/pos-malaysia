import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step5 = ({ selectedProduct }: any) => {
  const { setFieldValue } = useFormikContext();

  const [fieldFocus, setFieldFocus] = useState({
    documentType: false,
    postingKey2: false,
    accountCode: false,
    gSTEffectiveDate: false,
    gSTTaxCode: false,
    gSTInclusive3: false,
    mBBIndictor: false,
    postingKey3: false,
    accountCodeCustomerPay: false,
    rate2: false,
    rules: false,
    GSTEffectiveDate2: false,
    gSTTaxCode2: false,
    gSTInclusive2: false,
  });

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
            name="documentType"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.documentType ? "" : "Document Type"}
            onFocus={() => handleFocus("documentType", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("documentType", !!e.target.value)
            }
          />
          <label
            htmlFor="documentType"
            className={`floating-label ${
              fieldFocus.documentType ? "active" : ""
            }`}
          >
            documentType
          </label>
          <ErrorMessage
            name="documentType"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="postingKey2"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.postingKey2 ? "" : "Posting Key SAP"}
            onFocus={() => handleFocus("postingKey2", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("postingKey2", !!e.target.value)
            }
          />
          <label
            htmlFor="postingKey2"
            className={`floating-label ${
              fieldFocus.postingKey2 ? "active" : ""
            }`}
          >
            Posting Key SAP
          </label>
          <ErrorMessage
            name="postingKey2"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="accountCode"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.accountCode ? "" : "Account Code"}
            onFocus={() => handleFocus("accountCode", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("accountCode", !!e.target.value)
            }
          />
          <label
            htmlFor="accountCode"
            className={`floating-label ${
              fieldFocus.accountCode ? "active" : ""
            }`}
          >
            Account Code
          </label>
          <ErrorMessage
            name="accountCode"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="gSTEffectiveDate"
            type="date"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("gSTEffectiveDate", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("gSTEffectiveDate", !!e.target.value)
            }
          />
          <label
            htmlFor="gSTEffectiveDate"
            className={`floating-label ${
              fieldFocus.gSTEffectiveDate ? "active" : ""
            }`}
          >
            GST Effective Date
          </label>
          <ErrorMessage
            name="gSTEffectiveDate"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="gSTTaxCode"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.gSTTaxCode ? "" : "GST Tax code (SR, ZR, ES, OS)"
            }
            onFocus={() => handleFocus("gSTTaxCode", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("gSTTaxCode", !!e.target.value)
            }
          />
          <label
            htmlFor="gSTTaxCode"
            className={`floating-label ${
              fieldFocus.gSTTaxCode ? "active" : ""
            }`}
          >
            GST Tax code (SR, ZR, ES, OS)
          </label>
          <ErrorMessage
            name="gSTTaxCode"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
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
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="postingKey3"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.postingKey3 ? "" : "Posting Key 3"}
            onFocus={() => handleFocus("postingKey3", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("postingKey3", !!e.target.value)
            }
          />
          <label
            htmlFor="postingKey3"
            className={`floating-label ${
              fieldFocus.postingKey3 ? "active" : ""
            }`}
          >
            MBB- Indictor for Rounding
          </label>
          <ErrorMessage
            name="postingKey3"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="accountCodeCustomerPay"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.accountCodeCustomerPay
                ? ""
                : "Account Code (Customer Pay)"
            }
            onFocus={() => handleFocus("accountCodeCustomerPay", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("accountCodeCustomerPay", !!e.target.value)
            }
          />
          <label
            htmlFor="accountCodeCustomerPay"
            className={`floating-label ${
              fieldFocus.accountCodeCustomerPay ? "active" : ""
            }`}
          >
            Account Code (Customer Pay)
          </label>
          <ErrorMessage
            name="accountCodeCustomerPay"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="rate2"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.rate2 ? "" : "Rate 2"}
            onFocus={() => handleFocus("rate2", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("rate2", !!e.target.value)
            }
          />
          <label
            htmlFor="rate2"
            className={`floating-label ${fieldFocus.rate2 ? "active" : ""}`}
          >
            Rate 2
          </label>
          <ErrorMessage
            name="rate2"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="rules"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.rules ? "" : "Rules"}
            onFocus={() => handleFocus("rules", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("rules", !!e.target.value)
            }
          />
          <label
            htmlFor="rules"
            className={`floating-label ${fieldFocus.rules ? "active" : ""}`}
          >
            Rules
          </label>
          <ErrorMessage
            name="rules"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="GSTEffectiveDate2"
            type="date"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("GSTEffectiveDate2", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("GSTEffectiveDate2", !!e.target.value)
            }
          />
          <label
            htmlFor="GSTEffectiveDate2"
            className={`floating-label ${
              fieldFocus.GSTEffectiveDate2 ? "active" : ""
            }`}
          >
            GST Effective Date
          </label>
          <ErrorMessage
            name="GSTEffectiveDate2"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="gSTTaxCode2"
            type="text"
            className="form-control floating-label-input"
            placeholder={
              fieldFocus.gSTTaxCode2 ? "" : "GST Tax code(SR, ZR, ES, OS)"
            }
            onFocus={() => handleFocus("gSTTaxCode2", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("gSTTaxCode2", !!e.target.value)
            }
          />
          <label
            htmlFor="gSTTaxCode2"
            className={`floating-label ${
              fieldFocus.gSTTaxCode2 ? "active" : ""
            }`}
          >
            GST Tax code(SR, ZR, ES, OS)
          </label>
          <ErrorMessage
            name="gSTTaxCode2"
            component="div"
            className="error-message"
          />
        </div>
        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="gSTInclusive2"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.gSTInclusive2 ? "" : "GST inclusive (1,0)"}
            onFocus={() => handleFocus("gSTInclusive2", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("gSTInclusive2", !!e.target.value)
            }
          />
          <label
            htmlFor="gSTInclusive2"
            className={`floating-label ${
              fieldFocus.gSTInclusive2 ? "active" : ""
            }`}
          >
            GST inclusive (1,0)
          </label>
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
