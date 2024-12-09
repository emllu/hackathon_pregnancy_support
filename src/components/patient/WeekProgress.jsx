import React from "react";
import PropTypes from "prop-types";

// A helper function to display pregnancy status based on the weeks
const getPregnancyStatus = (weeks) => {
  if (weeks < 13) {
    return "First Trimester";
  } else if (weeks < 27) {
    return "Second Trimester";
  } else {
    return "Third Trimester";
  }
};

const WeekProgress = ({ weeks }) => {
  const status = getPregnancyStatus(weeks);

  // Setting the font size and color based on the trimester
  const getTrimesterClassName = () => {
    if (weeks < 13) return "text-2xl text-blue-700"; // First Trimester: Blue
    if (weeks < 27) return "text-xl text-yellow-700"; // Second Trimester: Yellow and smaller size
    return "text-4xl text-red-700"; // Third Trimester: Red and larger size
  };

  return (
    <div className="max-w-md mx-auto bg-purple-300 shadow-lg shadow-purple-500 rounded-lg p-5 mt-10">
      <h1 className="card-title text-3xl font-bold text-center mb-4">
        {weeks > 0 ? `${weeks} Weeks` : "Unknown Weeks"}
      </h1>
      <p className={`text-center ${getTrimesterClassName()} font-bold mb-6`}>
        {status}
      </p>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-700 bg-teal-200">
              Progress
            </span>
          </div>
          <div>
            <span className="text-xs font-semibold inline-block text-teal-700">
              {weeks >= 40 ? "Ready to Deliver!" : `${weeks}/40 Weeks`}
            </span>
          </div>
        </div>
        <div className="relative h-2 rounded bg-gray-300">
          <div
            className="absolute h-full rounded bg-purple-600 transition-all duration-700 ease-in-out shadow-md shadow-purple-500"
            style={{ width: `${(weeks / 40) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

WeekProgress.propTypes = {
  weeks: PropTypes.number,
};

WeekProgress.defaultProps = {
  weeks: 12,
};

export default WeekProgress;
