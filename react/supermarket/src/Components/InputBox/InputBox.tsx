import React from "react";

type ValueType = string | number;

interface IInputBox {
  label: string;
  value: ValueType;
  currentKey: string;
  handleChange: (currentKey: string, value: string) => void;
  type?: string;
  error?: string;
}

export default function InputBox({
  label,
  value,
  handleChange,
  currentKey,
  type = "text",
  error,
}: IInputBox) {
  return (
    <>
      <label>{label}</label>
      <br />
      <input
        style={{
          border: error && "1px solid red",
        }}
        value={value}
        type={type}
        onChange={(e) => handleChange(currentKey, e.target.value)}
      />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <br />
    </>
  );
}
