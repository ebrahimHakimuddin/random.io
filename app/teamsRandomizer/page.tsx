"use client";
import { useEffect, useRef, useState } from "react";

type GroupedStrings = string[][];

export default function DynamicInputForm() {
  const [inputs, setInputs] = useState<string[]>([""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [groupSize, setGroupSize] = useState<string>("");
  const [inputValue, setInputValue] = useState<string[]>([]);
  const [groups, setGroups] = useState<GroupedStrings>([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState<number | null>(null);
  const [showNotEnoughModal, setShowNotEnoughModal] = useState(false);
  const [showEndModal, setShowEndModal] = useState(false);
  const [showInvalidInputModal, setShowInvalidInputModal] = useState(false);
  const [showDivisibilityModal, setShowDivisibilityModal] = useState(false);

  useEffect(() => {
    setInputValue(inputs.filter((n) => n));
  }, [inputs]);

  const handleGroupSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setGroupSize(value);
    }
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
    if (index === inputs.length - 1 && event.target.value !== "") {
      setInputs([...newInputs, ""]);
    }
  };

  const handleClear = () => {
    setInputs([""]);
    setGroupSize("");
    setGroups([]);
    setCurrentTeamIndex(null);
    setShowNotEnoughModal(false);
    setShowEndModal(false);
    setShowInvalidInputModal(false);
    setShowDivisibilityModal(false);
  };

  const handleGenerateTeams = () => {
    const groupSizeNumber = parseInt(groupSize);
    if (
      !groupSize ||
      isNaN(groupSizeNumber) ||
      groupSizeNumber <= 0 ||
      inputValue.length === 0
    ) {
      setShowInvalidInputModal(true);
      return;
    }

    if (inputValue.length < groupSizeNumber) {
      setShowNotEnoughModal(true);
      return;
    }

    if (inputValue.length % groupSizeNumber !== 0) {
      setShowDivisibilityModal(true);
      return;
    }

    const shuffledInputs = inputValue
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    const generatedGroups: GroupedStrings = [];
    for (let i = 0; i < shuffledInputs.length; i += groupSizeNumber) {
      generatedGroups.push(shuffledInputs.slice(i, i + groupSizeNumber));
    }
    setGroups(generatedGroups);
    setCurrentTeamIndex(0); // Start with the first team
  };

  const nextTeam = () => {
    if (currentTeamIndex !== null && currentTeamIndex < groups.length - 1) {
      setCurrentTeamIndex(currentTeamIndex + 1);
    } else {
      setCurrentTeamIndex(null);
      setShowEndModal(true);
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const formatTeamMembers = (team: string[]) => {
    return team.length > 1
      ? team.slice(0, -1).join(", ") + " and " + team.slice(-1)
      : team[0];
  };

  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="p-2">
        <input
          className="w-[200px] rounded p-3"
          value={groupSize}
          onChange={handleGroupSizeChange}
          placeholder="Enter Team Size"
        />
      </div>
      {inputs.map((input, index) => (
        <div key={index} className="p-2">
          <input
            type="text"
            placeholder="Enter Name"
            value={input}
            className="w-[200px] rounded p-3"
            onChange={(e) => handleInputChange(index, e)}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        </div>
      ))}
      <div className="flex flex-row justify-center items-center">
        <button onClick={handleClear} className="btn btn-secondary m-2">
          Clear
        </button>
        <button onClick={handleGenerateTeams} className="btn btn-primary m-2">
          Generate Teams
        </button>
      </div>

      {currentTeamIndex !== null && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Team {currentTeamIndex + 1}</h3>
            <p className="py-4">
              {formatTeamMembers(groups[currentTeamIndex])}
            </p>
            <div className="modal-action">
              <button onClick={nextTeam} className="btn">
                Next Team
              </button>
            </div>
          </div>
        </dialog>
      )}

      {showDivisibilityModal ||
        (showNotEnoughModal && (
          <dialog open className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-2xl text-center">
                Cannot Divide Teams Evenly
              </h3>
              <p className="text-center">
                The number of participants is not evenly divisible by the team
                size.
              </p>
            </div>
          </dialog>
        ))}

      {showEndModal && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-2xl text-center">
              All Teams Generated
            </h3>
          </div>
        </dialog>
      )}

      {showInvalidInputModal && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-2xl text-center">Invalid Input</h3>
            <p className="text-center">
              Please enter a valid team size and at least one name.
            </p>
          </div>
        </dialog>
      )}
    </div>
  );
}
