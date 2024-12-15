import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setZone2FormState } from "../../../store/zoneFormSlices";
import { validationSchema } from "../interface/FormValidationSchemas";
import { Zone1Columns } from "../interface/Zone1Columns";

const Zone2 = forwardRef((_, ref) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      rows: [
        {
          from: "",
          to: "",
          base: "",
          fuelSurcharge15: "",
          handlingCharge15: "",
          posCoverage: "",
          overweightSurcharge: "",
          baseSurchargePos: "",
          sst6: "",
          allInPriceSST: "",
        },
      ],
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setZone2FormState(values));
      formik.resetForm();
    },
  });

  const addRow = () => {
    const newRow = {
      from: "",
      to: "",
      base: "",
      fuelSurcharge15: "",
      handlingCharge15: "",
      posCoverage: "",
      overweightSurcharge: "",
      baseSurchargePos: "",
      sst6: "",
      allInPriceSST: "",
    };
    formik.setFieldValue("rows", [...formik.values.rows, newRow]);
  };

  const deleteRow = (index: number) => {
    const updatedRows = formik.values.rows.filter((_, i) => i !== index);
    formik.setFieldValue("rows", updatedRows);
  };

  useImperativeHandle(ref, () => ({
    async submit() {
      formik.setTouched({
        rows: formik.values.rows.map((row) =>
          Object.keys(row).reduce((acc: any, key) => {
            acc[key] = true;
            return acc;
          }, {})
        ),
      });
      const isValid = await formik.validateForm();
      if (Object.keys(isValid).length === 0) {
        formik.handleSubmit();
        return true;
      }
      return false;
    },
  }));

  return (
    <FormikProvider value={formik}>
      <Form>
        <div className="horizontal-table-header">
          {Zone1Columns.map((column, idx) => (
            <div key={idx} className="header-col">
              <p>{column.label}</p>
            </div>
          ))}
          <div className="header-col">
            <strong>Action</strong>
          </div>
        </div>

        <div className="horizontal-table">
          {formik.values.rows.map((row, index) => (
            <div key={index} className="row">
              {Object.keys(row).map((key) => (
                <div className="col" key={key}>
                  <InputGroup>
                    <Field
                      name={`rows[${index}].${key}`}
                      type="number"
                      className="form-control floating-label-input w-100"
                      placeholder={`Enter ${key}`}
                    />
                    <ErrorMessage
                      name={`rows[${index}].${key}`}
                      component="div"
                      className="error-message"
                    />
                  </InputGroup>
                </div>
              ))}
              <div className="col">
                <button
                  type="button"
                  className="btn btn-icon btn-sm btn-danger mt-0"
                  onClick={() => deleteRow(index)}
                  disabled={formik.values.rows.length === 1}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            onClick={addRow}
            className="btn btn-sm btn-primary"
          >
            Add Row
          </button>
        </div>
      </Form>
    </FormikProvider>
  );
});

export { Zone2 };
