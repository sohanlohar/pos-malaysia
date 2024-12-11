import { Link } from "react-router-dom";
import clsx from "clsx";
import { KTIcon, toAbsoluteUrl } from "../../../helpers";
import { useLayout } from "../../core";
import { MutableRefObject, useEffect, useRef } from "react";
import { ToggleComponent } from "../../../assets/ts/components";

type PropsType = {
  sidebarRef: MutableRefObject<HTMLDivElement | null>;
};

const SidebarLogo = (props: PropsType) => {
  const { config } = useLayout();
  const toggleRef = useRef<HTMLDivElement>(null);

  const appSidebarDefaultMinimizeDesktopEnabled =
    config?.app?.sidebar?.default?.minimize?.desktop?.enabled;
  const appSidebarDefaultCollapseDesktopEnabled =
    config?.app?.sidebar?.default?.collapse?.desktop?.enabled;
  const toggleType = appSidebarDefaultCollapseDesktopEnabled
    ? "collapse"
    : appSidebarDefaultMinimizeDesktopEnabled
    ? "minimize"
    : "";
  const toggleState = appSidebarDefaultMinimizeDesktopEnabled ? "active" : "";
  const appSidebarDefaultMinimizeDefault =
    config.app?.sidebar?.default?.minimize?.desktop?.default;

  useEffect(() => {
    setTimeout(() => {
      const toggleObj = ToggleComponent.getInstance(
        toggleRef.current!
      ) as ToggleComponent | null;

      if (toggleObj === null) {
        return;
      }

      toggleObj.on("kt.toggle.change", function () {
        props.sidebarRef.current!.classList.add("animating");

        setTimeout(function () {
          props.sidebarRef.current!.classList.remove("animating");
        }, 300);
      });
    }, 600);
  }, [toggleRef, props.sidebarRef]);

  return (
    <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
      <Link to="/dashboard">
        <img
          alt="Logo"
          src={toAbsoluteUrl("media/logos/pos_logo_sm.svg")}
          className="h-25px app-sidebar-logo-default"
        />
        <img
          alt="Logo"
          src={toAbsoluteUrl("media/logos/pos_logo_sm.svg")}
          className="h-20px app-sidebar-logo-minimize"
        />
      </Link>

      {(appSidebarDefaultMinimizeDesktopEnabled ||
        appSidebarDefaultCollapseDesktopEnabled) && (
        <div
          ref={toggleRef}
          id="kt_app_sidebar_toggle"
          className={clsx(
            "app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-white btn-active-color-gray h-40px w-40px position-absolute top-50 start-100 translate-middle rotate",
            { active: appSidebarDefaultMinimizeDefault }
          )}
          data-kt-toggle="true"
          data-kt-toggle-state={toggleState}
          data-kt-toggle-target="body"
          data-kt-toggle-name={`app-sidebar-${toggleType}`}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      )}
    </div>
  );
};

export { SidebarLogo };
