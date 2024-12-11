import { ErrorMessage, Field, useFormikContext } from "formik";
import { useEffect, useState } from "react";

const Step6 = ({ selectedProduct, isEdited }: any) => {
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (selectedProduct) {
      const fields = ["posLoyaltyReward", "realRewards"];

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
            <label htmlFor="posLoyaltyReward">Pos Loyalty Reward Option</label>
          )}
          <Field
            as="select"
            name="posLoyaltyReward"
            className="form-control floating-label-input"
          >
            <option value="" disabled>
              Pos Loyalty Reward Option
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </Field>
          <ErrorMessage
            name="posLoyaltyReward"
            component="div"
            className="error-message"
          />
        </div>

        <div className="col-md-4 mb-4 floating-label-container">
          {isEdited && <label htmlFor="realRewards">Real Rewards</label>}
          <Field
            name="realRewards"
            type="text"
            className="form-control floating-label-input"
            placeholder="Real Rewards"
          />
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

export { Step6 };
