import * as Yup from "yup";

// Step 1 validation schema
export const step1ValidationSchema = Yup.object({
  productCode: Yup.string().required("Product is required"),
  productDescription: Yup.string().required("Product Description is required"),
  parentCode: Yup.string().required("Parent Code is required"),
  parentDescription: Yup.string().required("Parent Description is required"),
  shortDisplayName: Yup.string().required("Short Display Name is required"),
  glCustomerVendorDescription: Yup.string().required(
    "GL Customer/Vendor Description is required"
  ),
  agencyName1: Yup.string().required("Agency Name 1 is required"),
  agencyName2: Yup.string().required("Agency Name 2 is required"),
  pantasKodKKWT: Yup.string().required("Pantas Kod KKWT is required"),
  postingKey: Yup.string().required("Posting Key is required"),
  financialStatus: Yup.string().required("Financial Status is required"),
  // commissionProductCode: Yup.string().required(
  //   "Commission Product Code is required"
  // ),
});

// Step 2 validation schema
export const step2ValidationSchema = Yup.object({
  cash: Yup.string().required("Cash is required"),
  debitCard: Yup.string().required("Debit Card is required"),
  creditCardNotOnUs: Yup.string().required(
    "Credit Card (Not On Us) is required"
  ),
  creditCardOnUs: Yup.string().required("Credit Card is required"),
  cheque: Yup.string().required("Cheque is required"),
  bankersCheque: Yup.string().required("Banker's Cheque is required"),
  imprest: Yup.string().required("Imprest is required"),
  lpo: Yup.string().required("LPO is required"),
  soda: Yup.string().required("Soda is required"),
  irc: Yup.string().required("IRC is required"),
  touchNGo: Yup.string().required("Touch 'n Go is required"),
  deferredPayment: Yup.string().required("Deferred Payment is required"),
  voucher: Yup.string().required("Voucher is required"),
  eWallet: Yup.string().required("E-Wallet is required"),
  qRPay: Yup.string().required("QR Pay is required"),
});

// Step 3 validation schema
export const step3ValidationSchema = Yup.object({
  governmentServiceTax: Yup.string().required(
    "Government Service Tax is required"
  ),
  gstTax: Yup.string().required("GST Tax is required"),
  financialNonFinancial: Yup.string().required(
    "Financial/Non-Financial is required"
  ),
  staffDiscount: Yup.string().required("Staff Discount is required"),
  fixedAmountPerTrxn: Yup.string().required(
    "Fixed Amount Per Transaction is required"
  ),
  percentageValue: Yup.string().required("Percentage Value is required"),
  ratePOS: Yup.string().required("Rate POS is required"),
  ratePOSOnline: Yup.string().required("Rate POS Online is required"),
  customerPay: Yup.string().required("Customer Pay is required"),
  incentiveStaffPO: Yup.string().required("Incentive Staff PO is required"),
  agencyPay: Yup.string().required("Agency Pay is required"),
});

// Step 4 validation schema
export const step4ValidationSchema = Yup.object({
  documentType: Yup.string().required("Document Type is required"),
  postingKey2: Yup.string().required("Posting Key 2 is required"),
  accountCode: Yup.string().required("Account Code is required"),
  gSTEffectiveDate: Yup.string().required("GST Effective Date is required"),
  gSTTaxCode: Yup.string().required("GST Tax Code is required"),
  gSTInclusive3: Yup.string().required("GST Inclusive 3 is required"),
  mBBIndictor: Yup.string().required("MBB Indicator is required"),
  postingKey3: Yup.string().required("Posting Key 3 is required"),
  accountCodeCustomerPay: Yup.string().required(
    "Account Code (Customer Pay) is required"
  ),
  rate2: Yup.string().required("Rate 2 is required"),
  rules: Yup.string().required("Rules are required"),
  GSTEffectiveDate2: Yup.string().required("GST Effective Date 2 is required"),
  gSTTaxCode2: Yup.string().required("GST Tax Code 2 is required"),
  gSTInclusive2: Yup.string().required("GST Inclusive 2 is required"),
});

// Step 5 validation schema
export const step5ValidationSchema = Yup.object({
  documentType2: Yup.string().required("Document Type 2 is required"),
  postingKey4: Yup.string().required("Posting Key 4 is required"),
  accountCodePrd3: Yup.string().required("Account Code 3 is required"),
  postingKey5: Yup.string().required("Posting Key 3 is required"),
  accountCode4: Yup.string().required("Account Code 4 is required"),
  rate3: Yup.string().required("Rate 3 is required"),
  rule: Yup.string().required("Rule is required"),
  GSTEffectiveDate3: Yup.string().required("GST Effective Date 3 is required"),
  gSTTaxCode3: Yup.string().required("GST Tax Code 3 is required"),
  paymentFrequency: Yup.string().required("Payment Frequency is required"),
  grossNetPayment: Yup.string().required("Gross/Net Payment is required"),
  gSTInclusive: Yup.string().required("GST Inclusive is required"),
});

// Step 6 validation schema
export const step6ValidationSchema = Yup.object({
  posLoyaltyReward: Yup.string().required("POS Loyalty Reward is required"),
  realRewards: Yup.string().required("Real Rewards is required"),
});
