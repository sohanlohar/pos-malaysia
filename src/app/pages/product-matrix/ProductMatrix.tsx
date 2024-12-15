import { Outlet, Route, Routes } from "react-router-dom";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import { PageTitle } from "../../../_metronic/layout/core";
import { TablesWidget13 } from "../../../_metronic/partials/widgets";
import { PosLajuWalkIn } from "../../components/product-matrix/PosLajuWalkIn";

const ProductMatrix: React.FC = () => {
  return (
    <>
      <Routes>
        <Route element={<Outlet />}>
          <Route path="pos-laju-walk-in" element={<PosLajuWalkIn />} />
          <Route
            path="pos-laju-motor-delivery"
            element={<>pos-laju-motor-delivery</>}
          />
          <Route
            path="pos-laju-prepaid-rates"
            element={<>cdcd /product-matrix/pos-laju-prepaid-rates</>}
          />
        </Route>
      </Routes>
    </>
  );
};

export { ProductMatrix };
