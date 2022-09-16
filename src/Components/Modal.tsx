import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  position?: "top" | "middle" | "bottom";
  title?: string;
  body: JSX.Element;
  footer?: JSX.Element;
};

const Modal = ({ isOpen, onClose, position, title, body, footer }: Props) => {
  return (
    <>
      {isOpen ? (
        <>
          <div
            className={`justify-center ${
              position === "top"
                ? "items-start"
                : position === "bottom"
                ? "items-end"
                : "items-center"
            } flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none pb-6">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-19 font-semibold">{title}</h3>
                  <img
                    src={require("../Assets/cross_icon.svg").default}
                    alt="close icon"
                    className="h-4 mt-2 cursor-pointer"
                    onClick={onClose}
                  />
                </div>
                {/*body*/}
                <div
                  className="relative flex-auto overflow-auto"
                  style={{ maxHeight: "70vh" }}
                >
                  {body}
                </div>
                {/*footer*/}
                {footer && (
                  <div className="flex items-center justify-end px-6 py-3 border-t border-solid border-slate-200 rounded-b">
                    {footer}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default Modal;
