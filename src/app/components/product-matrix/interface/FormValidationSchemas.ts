import * as Yup from "yup";

const decimalValidation = Yup.string()
  .matches(/^\d+(\.\d{1,3})?$/, "Must be a number with up to 3 decimal places.")
  .required("This field is required");

export const validationSchema = Yup.object({
  rows: Yup.array().of(
    Yup.object({
      from: decimalValidation,
      to: decimalValidation,
      base: decimalValidation,
      fuelSurcharge15: decimalValidation,
      handlingCharge15: decimalValidation,
      posCoverage: decimalValidation,
      overweightSurcharge: decimalValidation,
      baseSurchargePos: decimalValidation,
      sst6: decimalValidation,
      allInPriceSST: decimalValidation,
    })
  ),
});
