"use client";
import { useEffect, useState } from "react";
let count = 0;
export default function NumberRandomizer() {
  const [value, setValue] = useState<string>("");
  const [numberList, setNumberList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  function genModal() {
    
    const numberDialog = document.getElementById(
      "numberModal"
    )! as HTMLDialogElement;

    if (numberList.length === 0) {
      const endDialog = document.getElementById(
        "endModal"
      )! as HTMLDialogElement;
      numberDialog.close();
      endDialog.showModal();
      return;
    }

    const randomIndex = Math.floor(Math.random() * numberList.length);
    setNumber(numberList[randomIndex].toString());

    const updatedList = [...numberList];
    updatedList.splice(randomIndex, 1);
    setNumberList(updatedList);

    numberDialog.showModal();
  }
  useEffect(() => {
    if (numberList.length > 0 && count === 0) {
      count++;
      genModal();
    }
  }, [numberList]);
  const handleClick = () => {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue) || parsedValue <= 0) {
      const noNumberDialog = document.getElementById(
        "noNumberModal"
      )! as HTMLDialogElement;
      noNumberDialog.showModal();
      return;
    }

    const tempNumberList = Array.from(
      { length: Number(value) },
      (_, i) => i + 1
    );
    setNumberList(tempNumberList);
    genModal();
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="card border-2 ">
        <h1 className="text-center font-bold text-2xl pt-3">
          Number Generator
        </h1>
        <div className="card-body p-8">
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={value}
            required
            onChange={handleChange}
          />
          <button
            className="btn btn-outline btn-primary text-xl"
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
      </div>

      <dialog id="numberModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Your Number</h3>
          <p className="py-4">{number}</p>
          <div className="modal-action">
            <button onClick={genModal} className="btn">
              Generate Another
            </button>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="endModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">Out of numbers.</h3>
          <div className="modal-action m-0">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="noNumberModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">
            Please enter a maximum number.
          </h3>
          <div className="modal-action m-0">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
