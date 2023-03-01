import React from "react";

export default function MachineFrame({
  img,
  choice,
  able,
}) {
  return (
    <div className="machineFrame">
      <p className="text-name">Machine</p>
      <img src={img} width="200" alt={choice} />
      <p className={(!able) ? "invisible" : "text"}>{choice === "QuestionMark" ? "Machine chooses..." : choice}</p>
    </div>
  );
}