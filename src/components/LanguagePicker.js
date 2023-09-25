import React from "react";

const LanguagePicker = ({ language, setLanguage }) => {
  return (
    <div className="inline-flex mt-2">
      <button
        onClick={() => setLanguage("english")}
        className={`${
          language === "english"
            ? "bg-orange-400 text-white"
            : "bg-white hover:bg-orange-400 text-orange-800"
        } font-bold py-2 px-4 rounded-l border`}
      >
        English
      </button>

      <button
        onClick={() => setLanguage("spanish")}
        className={`${
          language === "spanish"
            ? "bg-orange-400 text-white"
            : "bg-white hover:bg-orange-400 text-orange-800"
        } font-bold py-2 px-4 rounded-r border`}
      >
        Español
      </button>
    </div>
  );
};

export default LanguagePicker;
