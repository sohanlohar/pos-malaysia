import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  commissionProductCode: string;
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
  accountCode3: string;
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

interface FormState {
  formData: FormValues[];
}

const initialState: FormState = {
  formData: [],
};

const poslajuProductSlice = createSlice({
  name: "poslajuProduct",
  initialState,
  reducers: {
    saveFormData: (state, action: PayloadAction<FormValues>) => {
      state.formData.push(action.payload);
    },
    editFormData: (state, action: PayloadAction<{ index: number; updatedData: FormValues }>) => {
      const { index, updatedData } = action.payload;
      if (state.formData[index]) {
        state.formData[index] = updatedData;
      }
    },
    removeFormData: (state, action) => {
      state.formData = state.formData.filter(
        (item) => item.productCode !== action.payload.productCode
      );
    },
    resetFormData: (state) => {
      state.formData = [];
    },
  },
});

export const { saveFormData, resetFormData, editFormData, removeFormData } =
  poslajuProductSlice.actions;
export default poslajuProductSlice.reducer;
