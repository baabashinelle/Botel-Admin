import { useLocation } from "react-router-dom"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ModalSignUp } from "./ModalButtons";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";


export default function MyModal({ Design }) {
  let [isOpen, setIsOpen] = useState(false);
const { pathname } = useLocation();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {pathname === "/dashboard" ? (
        <ModalSignUp openModal={openModal}>
          <div className="flex gap-4 cursor-pointer">
            <AiOutlineEye className="hover:text-gray-600 hover:scale-125" />
            <AiOutlineEdit className="hover:text-gray-600 hover:scale-125" />
            <AiOutlineDelete className="hover:text-gray-600 hover:scale-125" />
          </div>
        </ModalSignUp>
      ) : (
        <div className=" inset-0 flex items-center justify-center">
          <ModalSignUp openModal={openModal}>
            <button
              onClick={openModal}
              className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl font-bold"
            >
              Sign up
            </button>
          </ModalSignUp>
        </div>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFr
              om="opacity-100"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-100 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block max-w-[36rem] overflow-hidden text-left font-text align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Design />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
