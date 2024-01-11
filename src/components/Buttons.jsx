function Buttons({ text, disabled }) {
  return (
    <button className="btn btn-secondary btn-sm md:btn-md" disabled={disabled}>
      {text}
    </button>
  );
}

export default Buttons;
