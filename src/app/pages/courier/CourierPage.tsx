import { Outlet, Route, Routes } from "react-router-dom";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import { PageTitle } from "../../../_metronic/layout/core";
import { TablesWidget13 } from "../../../_metronic/partials/widgets";

const CourierPage: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route
            path="pos-laju"
            element={<TablesWidget13 className="card-xl-stretch mb-xl-8" />}
          />
          <Route
            path="pos-niaga"
            element={
              <>
                <PageTitle breadcrumbs={[]}>PosNiaga Product</PageTitle>
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export { CourierPage };
