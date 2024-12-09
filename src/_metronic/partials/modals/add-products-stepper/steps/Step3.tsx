import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step3 = ({ selectedProduct }: any) => {
  const { setFieldValue } = useFormikContext();

  const [fieldFocus, setFieldFocus] = useState({
    posLoyaltyReward: false,
    realRewards: false,
  });

  useEffect(() => {
    if (selectedProduct) {
      const fields = ["posLoyaltyReward", "realRewards"];

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
      </div>
    </>
  );
};

export { Step3 };
