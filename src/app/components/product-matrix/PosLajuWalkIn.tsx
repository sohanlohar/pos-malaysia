import React, { useRef, useState } from "react";
import { Content } from "../../../_metronic/layout/components/content";
import { ModalWrapper } from "../../../_metronic/partials/modals/ModalWrapper";
import { WalkInZone1 } from "./WalkInZone1";
import { WalkInZone2 } from "./WalkInZone2";
import { WalkInZone3 } from "./WalkInZone3";
import { WalkInZone4 } from "./WalkInZone4";
import { WalkInZone5 } from "./WalkInZone5";
import { Zone1 } from "./steps/Zone1";
import { Zone2 } from "./steps/Zone2";
import { Zone3 } from "./steps/Zone3";
import { Zone4 } from "./steps/Zone4";
import { Zone5 } from "./steps/Zone5";

const PosLajuWalkIn: React.FC = () => {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);

  const stepLabels = ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5"];
  const isLastStep = step === 5;

  const stepRef = useRef<any>(null);

  const handleNext = async () => {
    if (stepRef.current) {
      const isSubmitted = await stepRef.current.submit();
      if (isSubmitted) {
        if (step === 5) {
          setShow(false);
          setStep(1);
        } else {
          setStep((prev) => (prev < 5 ? prev + 1 : prev));
        }
      }
    }
  };

  const handlePrevious = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Zone1 ref={stepRef} />;
      case 2:
        return <Zone2 ref={stepRef} />;
      case 3:
        return <Zone3 ref={stepRef} />;
      case 4:
        return <Zone4 ref={stepRef} />;
      case 5:
        return <Zone5 ref={stepRef} />;
      default:
        return null;
    }
  };

  return (
    <Content>
      <div className="d-flex justify-content-between pb-6 gap-6 align-items-center">
        <h2 className="mb-0">Pos Laju Walk In</h2>
        <div className="d-flex gap-5">
          <button
            onClick={() => setShow(true)}
            className="btn btn-sm fw-bold btn-primary"
          >
            Add Data
          </button>
        </div>
      </div>

      <ul className="nav nav-tabs nav-line-tabs mb-5 fs-6">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#kt_tab_pane_1"
          >
            Zone 1 Within Klang Valley
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_2">
            Zone 2 Between State (Peninsular)
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_3">
            Zone 3 Within State (Peninsular / Sabah / Sarawak)
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_4">
            Zone 4 Peninsular to Sabah / Sarawak
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#kt_tab_pane_5">
            Zone 5 Sabah / Sarawak to Peninsular
          </a>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="kt_tab_pane_1"
          role="tabpanel"
        >
          <WalkInZone1 />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_2" role="tabpanel">
          <WalkInZone2 />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_3" role="tabpanel">
          <WalkInZone3 />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_4" role="tabpanel">
          <WalkInZone4 />
        </div>
        <div className="tab-pane fade" id="kt_tab_pane_5" role="tabpanel">
          <WalkInZone5 />
        </div>
      </div>
      <ModalWrapper show={show} setShow={setShow} title="Zone">
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
        </div>
        <div className="card py-10 px-5 mt-4">{renderStep()}</div>
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
          <button
            type="submit"
            className="btn btn-sm btn-primary"
            onClick={handleNext}
            // disabled={step === 1}
          >
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </ModalWrapper>
    </Content>
  );
};

export { PosLajuWalkIn };
