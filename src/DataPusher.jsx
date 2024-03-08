// DataPusher.jsx
import React, { useEffect, useState } from "react";

const getDataFromLocalStorage = () => {
  try {
    // Retrieve data from local storage
    const jsonData = localStorage.getItem("TaskData");

    if (jsonData) {
      // Parse JSON data
      const taskData = JSON.parse(jsonData);
      return taskData;
    } else {
      return null; // Return null if no data is found
    }
  } catch (error) {
    console.error("Error retrieving data:", error.message);
    return null;
  }
};

const DataPusher = () => {
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      const data = getDataFromLocalStorage();
      setTaskData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {taskData ? (
        <p>
          <strong>Project Owner: </strong>
          {taskData.ownerName} | <strong>Project Name: </strong>
          {taskData.projectName} | <strong>Due Date: </strong>
          {taskData.dateDue}
        </p>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default DataPusher;
