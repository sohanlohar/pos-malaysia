import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import {
  editFormData,
  saveFormData,
} from "../../../../app/store/poslajuProductSlice";
import { KTIcon } from "../../../helpers";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import {
  step1ValidationSchema,
  step2ValidationSchema,
  step3ValidationSchema,
  step4ValidationSchema,
  step5ValidationSchema,
  step6ValidationSchema,
} from "./validationSchemas";
import { Step4 } from "./steps/Step4";
import { Step5 } from "./steps/Step5";
import { Step6 } from "./steps/Step6";

interface FormValues {
  productCode: string;
  productDescription: string;
  parentCode: string;
  parentDescription: string;
  shortDisplayName: string;
  glCustomerVendorDescription: string;
  agencyName1: string;
  agencyName2: string;
  pantasKodKKWT: string;
  postingKey: string;
  financialStatus: string;
  // commissionProductCode: string;
  cash: string;
  debitCard: string;
  creditCardNotOnUs: string;
  creditCardOnUs: string;
  cheque: string;
  bankersCheque: string;
  imprest: string;
  lpo: string;
  soda: string;
  irc: string;
  touchNGo: string;
  deferredPayment: string;
  voucher: string;
  eWallet: string;
  qRPay: string;
  posLoyaltyReward: string;
  gstTax: string;
  governmentServiceTax: string;
  realRewards: string;
  financialNonFinancial: string;
  staffDiscount: string;
  fixedAmountPerTrxn: string;
  percentageValue: string;
  ratePOS: string;
  ratePOSOnline: string;
  customerPay: string;
  incentiveStaffPO: string;
  agencyPay: string;
  documentType: string;
  postingKey2: string;
  accountCode: string;
  gSTEffectiveDate: string;
  gSTTaxCode: string;
  gSTInclusive: string;
  mBBIndictor: string;
  postingKey3: string;
  accountCodeCustomerPay: string;
  rate2: string;
  rules: string;
  GSTEffectiveDate2: string;
  gSTTaxCode2: string;
  gSTInclusive2: string;
  documentType2: string;
  postingKey4: string;
  accountCodePrd3: string;
  postingKey5: string;
  accountCode4: string;
  rate3: string;
  rule: string;
  GSTEffectiveDate3: string;
  gSTTaxCode3: string;
  gSTInclusive3: string;
  paymentFrequency: string;
  grossNetPayment: string;
}

type Props = {
  show: boolean;
  handleClose: () => void;
  selectedProduct: FormValues | null;
  editIndex: any;
  isEdited: boolean;
  setIsedited: Function;
  setSelectedProduct: Function;
  setEditIndex: Function;
};

const modalsRoot = document.getElementById("root-modals") || document.body;

const AddProductModel = ({
  show,
  handleClose,
  selectedProduct,
  editIndex,
  isEdited,
  setIsedited,
  setSelectedProduct,
  setEditIndex,
}: Props) => {
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();
  const initialValues = {
    productCode: "",
    productDescription: "",
    parentCode: "",
    parentDescription: "",
    shortDisplayName: "",
    glCustomerVendorDescription: "",
    agencyName1: "",
    agencyName2: "",
    pantasKodKKWT: "",
    postingKey: "",
    financialStatus: "",
    // commissionProductCode: "",
    cash: "",
    debitCard: "",
    creditCardNotOnUs: "",
    creditCardOnUs: "",
    cheque: "",
    bankersCheque: "",
    imprest: "",
    lpo: "",
    soda: "",
    irc: "",
    touchNGo: "",
    deferredPayment: "",
    voucher: "",
    eWallet: "",
    qRPay: "",
    posLoyaltyReward: "",
    gstTax: "",
    governmentServiceTax: "",
    realRewards: "",
    financialNonFinancial: "",
    staffDiscount: "",
    fixedAmountPerTrxn: "",
    percentageValue: "",
    ratePOS: "",
    ratePOSOnline: "",
    customerPay: "",
    incentiveStaffPO: "",
    agencyPay: "",
    documentType: "",
    postingKey2: "",
    accountCode: "",
    gSTEffectiveDate: "",
    gSTTaxCode: "",
    gSTInclusive: "",
    mBBIndictor: "",
    postingKey3: "",
    accountCodeCustomerPay: "",
    rate2: "",
    rules: "",
    GSTEffectiveDate2: "",
    gSTTaxCode2: "",
    gSTInclusive2: "",
    documentType2: "",
    postingKey4: "",
    accountCodePrd3: "",
    postingKey5: "",
    accountCode4: "",
    rate3: "",
    rule: "",
    GSTEffectiveDate3: "",
    gSTTaxCode3: "",
    gSTInclusive3: "",
    paymentFrequency: "",
    grossNetPayment: "",
  };

  const handleNext = () => setStep((prev) => prev + 1);

  const handleSubmitFn = (values: any) => {
    if (!!isEdited) {
      dispatch(editFormData({ index: editIndex, updatedData: values }));
      setSelectedProduct(null);
      setEditIndex(null);
    } else {
      dispatch(saveFormData(values));
    }
    setIsedited(false);
    setStep(1);
    handleClose();
  };

  const handlePrevious = () => setStep((prev) => prev - 1);

  const validationSchema = [
    step1ValidationSchema,
    step2ValidationSchema,
    step3ValidationSchema,
    step4ValidationSchema,
    step5ValidationSchema,
    step6ValidationSchema,
  ][step - 1];

  const isLastStep = step === 6;

  const stepLabels = [
    "Product Details",
    "Payment Method",
    "Loyalty Scheme",
    "Pricing",
    "Transaction Level",
    "Commission",
  ];

  return createPortal(
    <Modal
      id="kt_modal_create_app"
      tabIndex={-1}
      dialogClassName="modal-dialog modal-dialog-centered mw-900px"
      show={show}
      onHide={handleClose}
    >
      <div className="modal-header px-8 py-3">
        <h2 className="mb-0">
          {editIndex !== null ? "Edit Product" : "Create Product"}
        </h2>
        <button
          className="btn btn-sm btn-icon btn-active-color-primary"
          onClick={handleClose}
        >
          <KTIcon
            className="fs-2hx text-gray-700 text-hover-primary"
            iconName="cross"
            iconType="solid"
          />
        </button>
      </div>

      <div className="modal-body py-lg-5 px-lg-10">
        <div className="stepper stepper-pills stepper-column">
          <div className="stepper-nav flex-row gap-10 justify-content-between">
            {stepLabels.map((label, index) => (
              <div
                key={index}
                className={`stepper-item ${
                  step === index + 1
                    ? "current"
                    : step > index + 1
                    ? "done"
                    : ""
                }`}
              >
                <div className="stepper-wrapper text-center flex-column gap-4">
                  <div className="stepper-icon w-35px h-35px mr-0 rounded-circle">
                    <i className="stepper-check fas fa-check"></i>
                    <span className="stepper-number">{index + 1}</span>
                  </div>
                  <div className="stepper-label">
                    <h4 className="stepper-title">{label}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={(values) => {
              console.log("step6ValidationSchema", values);
              if (isLastStep) {
                handleSubmitFn(values);
              } else {
                handleNext();
              }
            }}
          >
            {({ setTouched, resetForm }) => {
              useEffect(() => {
                if (isEdited) {
                  setTouched({});
                }
              }, [initialValues, isEdited, resetForm, setTouched]);
              return (
                <Form className="pt-4">
                  {step === 1 && (
                    <Step1
                      selectedProduct={selectedProduct}
                      isEdited={isEdited}
                    />
                  )}
                  {step === 2 && (
                    <Step2
                      selectedProduct={selectedProduct}
                      isEdited={isEdited}
                    />
                  )}
                  {step === 3 && (
                    <Step3
                      selectedProduct={selectedProduct}
                      isEdited={isEdited}
                    />
                  )}
                  {step === 4 && (
                    <Step4
                      selectedProduct={selectedProduct}
                      isEdited={isEdited}
                    />
                  )}
                  {step === 5 && (
                    <Step5
                      selectedProduct={selectedProduct}
                      isEdited={isEdited}
                    />
                  )}
                  {step === 6 && (
                    <Step6
                      selectedProduct={selectedProduct}
                      isEdited={isEdited}
                    />
                  )}

                  <div className="d-flex justify-content-end mt-4">
                    {step > 1 && (
                      <button
                        type="button"
                        className="btn btn-sm btn-light-primary me-3"
                        onClick={handlePrevious}
                      >
                        Back
                      </button>
                    )}
                    <button type="submit" className="btn btn-sm btn-primary">
                      {isLastStep ? "Submit" : "Next"}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Modal>,
    modalsRoot
  );
};

export { AddProductModel };
