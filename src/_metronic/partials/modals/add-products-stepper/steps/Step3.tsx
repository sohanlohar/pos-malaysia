import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step3 = ({ selectedProduct }: any) => {
  const { setFieldValue } = useFormikContext();

  const [fieldFocus, setFieldFocus] = useState({
    posLoyaltyReward: false,
    gstTax: false,
    governmentServiceTax: false,
    realRewards: false,
    financialNonFinancial: false,
    staffDiscount: false,
    fixedAmountPerTrxn: false,
    percentageValue: false,
    ratePOS: false,
    ratePOSOnline: false,
    customerPay: false,
    incentiveStaffPO: false,
    agencyPay: false,
    documentType: false,
    postingKey2: false,
    accountCode: false,
    gSTEffectiveDate: false,
    gSTTaxCode: false,
    gSTInclusive3: false,
    postingKey5: false,
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
        "posLoyaltyReward",
        "gstTax",
        "governmentServiceTax",
        "realRewards",
        "financialNonFinancial",
        "staffDiscount",
        "fixedAmountPerTrxn",
        "percentageValue",
        "ratePOS",
        "ratePOSOnline",
        "customerPay",
        "incentiveStaffPO",
        "agencyPay",
        "documentType",
        "postingKey2",
        "accountCode",
        "gSTEffectiveDate",
        "gSTTaxCode",
        "gSTInclusive3",
        "postingKey5",
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
            as="select"
            name="posLoyaltyReward"
            className="form-control floating-label-input"
            onFocus={() => handleFocus("posLoyaltyReward", true)}
            onBlur={(e: React.FocusEvent<HTMLSelectElement>) =>
              handleFocus("posLoyaltyReward", !!e.target.value)
            }
          >
            <option value="" disabled>
              Select Pos Loyalty Reward
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <label
            htmlFor="posLoyaltyReward"
            className={`floating-label ${
              fieldFocus.posLoyaltyReward ? "active" : ""
            }`}
          >
            Pos Loyalty Reward
          </label>
          <ErrorMessage
            name="posLoyaltyReward"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          <Field
            name="realRewards"
            type="text"
            className="form-control floating-label-input"
            placeholder={fieldFocus.realRewards ? "" : "Real Rewards"}
            onFocus={() => handleFocus("realRewards", true)}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              handleFocus("realRewards", !!e.target.value)
            }
          />
          <label
            htmlFor="realRewards"
            className={`floating-label ${
              fieldFocus.realRewards ? "active" : ""
            }`}
          >
            Real Rewards
          </label>
          <ErrorMessage
            name="realRewards"
            component="div"
            className="error-message"
          />
        </div>
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
            placeholder={fieldFocus.postingKey2 ? "" : "Posting Key2"}
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
            Posting Key2
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

export { Step3 };

