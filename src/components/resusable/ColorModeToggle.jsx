import { useCallback } from "react";
import PropTypes from "prop-types";
import { RiMoonLine, RiSunLine } from "react-icons/ri";

const ColorModeToggle = ({ colorMode, setColorMode }) => {
  const toggleColorMode = useCallback(() => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }, [colorMode, setColorMode]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleColorMode();
      }
    },
    [toggleColorMode]
  );

  return (
    <div
      className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-violet-400 dark:text-dark-100 text-dark-900"
      onClick={toggleColorMode}
      onKeyDown={handleKeyDown}
      aria-label="Toggle Color Mode"
      tabIndex={0}
      role="button"
    >
      <div className="flex items-center justify-center">
        {colorMode === "light" ? (
          <RiMoonLine className="h-4 w-4" />
        ) : (
          <RiSunLine className="h-4 w-4" />
        )}
      </div>
    </div>
  );
};

ColorModeToggle.propTypes = {
  colorMode: PropTypes.string.isRequired,
  setColorMode: PropTypes.func.isRequired,
};

export default ColorModeToggle;
