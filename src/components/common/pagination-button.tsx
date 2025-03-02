const PaginationButton = ({
  onClick,
  disabled = false,
  isActive = false,
  children,
}: PaginationButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-md cursor-pointer transition ${
        disabled
          ? "text-gray-400 cursor-not-allowed"
          : isActive
          ? "bg-[var(--yellow4)] text-white font-bold"
          : "bg-[var(--yellow2)] hover:bg-[var(--yellow3)] text-gray-800"
      }`}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
