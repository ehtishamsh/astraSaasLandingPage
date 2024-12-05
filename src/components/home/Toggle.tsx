function Toggle({
  label,
  isToggled,
  setIsToggled,
}: {
  label: string;
  isToggled: boolean;
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const toggle = () => setIsToggled(!isToggled);
  return (
    <>
      <button
        className={`relative inline-flex items-center h-6 rounded-full w-12  focus:ring-mainColor-700 bg-mainColor-500 `}
        onClick={toggle}
        role="switch"
        aria-checked={isToggled}
        aria-label={label}
      >
        <span className="sr-only">{label}</span>
        <span
          className={`${
            isToggled ? "translate-x-6" : "translate-x-1"
          } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
        />
      </button>
    </>
  );
}

export default Toggle;
