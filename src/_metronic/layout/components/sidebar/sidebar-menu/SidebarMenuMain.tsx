import { useIntl } from "react-intl";
import { KTIcon } from "../../../../helpers";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";
import { SidebarMenuItem } from "./SidebarMenuItem";

const SidebarMenuMain = () => {
  const intl = useIntl();

  return (
    <>
      <SidebarMenuItem
        to="/dashboard"
        title={intl.formatMessage({ id: "MENU.DASHBOARD" })}
        fontIcon="bi-house"
      />
      <SidebarMenuItemWithSub
        to="/courier"
        title="Courier"
        hasBullet={false}
        fontIcon="bi-truck"
      >
        <SidebarMenuItem
          to="/courier/pos-laju"
          title="Poslaju Product"
          fontIcon="bi-box-seam"
        />
        <SidebarMenuItem
          to="/courier/pos-niaga"
          title="PosNiaga Product"
          fontIcon="bi-box-seam"
        />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub
        to="/product-matrix"
        title="Product Matrix"
        hasBullet={false}
        fontIcon="bi-graph-up-arrow"
      >
        <SidebarMenuItem
          to="/product-matrix/pos-laju-walk-in"
          title="Pos Laju Walk In"
          fontIcon="bi-box-seam"
        />
        <SidebarMenuItem
          to="/product-matrix/pos-laju-motor-delivery"
          title="Pos Laju Motor Delivery"
          fontIcon="bi-box-seam"
        />
          <SidebarMenuItem
          to="/product-matrix/pos-laju-prepaid-rates"
          title="Pos Laju Motor Delivery"
          fontIcon="bi-box-seam"
        />
      </SidebarMenuItemWithSub>
    </>
  );
};

export { SidebarMenuMain };
