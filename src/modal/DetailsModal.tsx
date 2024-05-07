import { useEffect, useRef, useState } from "react";
import { useEmployees } from "../hooks/useEmployees";
import { User } from "../types";

interface Props {
  id: string;
  users: User[];
}

export function DetailsModal({ id, users }: Props) {
  const [thisEmployee, setThisEmployee] = useState<User | null>();

  const modalRef = useRef<HTMLDialogElement>(null);

  function openModal() {
    modalRef.current?.showModal();
    const foundEmployee = users.find((e) => e.login.uuid === id);
    setThisEmployee(foundEmployee);
    console.log(foundEmployee);
  }

  function closeModal() {
    modalRef.current?.close();
    setThisEmployee(null);
  }
  return (
    <>
      <button className="btn btn-ghost text-white" onClick={openModal}>
        Details
      </button>
      <dialog id="modal" className="modal" ref={modalRef}>
        <div className="modal-box">
          <div className="flex justify-center">
            <img
              src={thisEmployee?.picture.medium}
              className="w-24 h-24 rounded-full mr-4"
            />
          </div>

          <h3 className="font-bold text-lg text-center pr-5">
            {thisEmployee?.name.title} {thisEmployee?.name.first}{" "}
            {thisEmployee?.name.last}
          </h3>
          <div className="pt-4">
            <p>
              <strong>Email:</strong> {thisEmployee?.email}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${thisEmployee?.location.street.number} ${thisEmployee?.location.street.name} `}
            </p>
            <p>
              <strong>Postcode:</strong> {thisEmployee?.location.postcode}
            </p>
            <p>
              <strong>Country:</strong> {thisEmployee?.location.country}
            </p>
            <p>
              <strong>State:</strong> {thisEmployee?.location.state}
            </p>
            <p>
              <strong>City:</strong> {thisEmployee?.location.city}
            </p>
            <p>
              <strong>Phone:</strong> {thisEmployee?.phone}
            </p>
            <p>
              <strong>Age:</strong> {thisEmployee?.dob.age}
            </p>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
