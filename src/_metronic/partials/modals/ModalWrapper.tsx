import React, { useState } from "react";
import { DataTableWrapper } from "../../../_metronic/partials/widgets/tables/DataTableWrapper";
// import { Button, Modal } from "react-bootstrap";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  ModalTitle,
} from "react-bootstrap";
import { KTIcon } from "../../helpers";

interface ModalWrapperProps {
  show: boolean;
  setShow: (value: boolean) => void;
  children?: React.ReactNode;
  title: string;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  show,
  setShow,
  children,
  title,
}) => {
  const handleClose = () => setShow(false);

  return (
    <div className="card">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        // fullscreen="xxl-down"
        // dialogClassName="modal-90w"
        centered
      >
        <ModalHeader className="py-3">
          <ModalTitle>{title}</ModalTitle>
          <button className="btn btn-sm btn-icon btn-active-color-primary" onClick={handleClose}>
            <KTIcon
              className="fs-2hx text-gray-700 text-hover-primary"
              iconName="cross"
              iconType="solid"
            />
          </button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {/* <ModalFooter className="py-3">
          <Button variant="primary">Understood</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
};

export { ModalWrapper };
