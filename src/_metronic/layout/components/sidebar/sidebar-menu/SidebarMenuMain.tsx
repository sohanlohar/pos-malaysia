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
    </>
  );
};

export { SidebarMenuMain };
