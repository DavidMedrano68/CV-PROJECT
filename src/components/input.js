export default function Input({ onChange, value, label, bool }) {
  return (
    <>
      <label>{label}</label>
      <input
        required
        disabled={bool}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
}
export function DateInput({ label, onChange, value, bool }) {
  return (
    <>
      <label>{label}</label>
      <input
        required
        type="month"
        onChange={onChange}
        value={value}
        disabled={bool}
      ></input>
    </>
  );
}
export function TextArea({ label, onChange, value, bool }) {
  return (
    <>
      <label>{label}</label>
      <textarea
        disabled={bool}
        value={value}
        onChange={onChange}
        maxLength={90}
      ></textarea>
    </>
  );
}
