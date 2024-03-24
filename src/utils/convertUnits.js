export const roundDegree = async (degree, type) => {
    const unit = type === 'metrics' ? '°C' : '°F';
    if ((Math.round(degree * 10) / 10) % 1 === 0) {
      return `${(Math.round(degree * 10) / 10).toFixed(1)}${unit}`;
    } else {
      return `${Math.round(degree * 10) / 10}${unit}`;
    }
  };

export const convertToKmH = async (data) => {
    return `${Math.round(data * 3.6)} km/h`;
  };
  
export const convertToKm = async (data) => {
    return `${data / 1000} km`;
};
  

export const capitalize = async(string) => {
    const splitString = string.split(' ');
    return splitString.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
};

export const formatDate = async(unixTimestamp, type) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  
    const daysOfWeekShortened = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsOfYearShortened = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const date = new Date(unixTimestamp * 1000);
    const dayOfMonth = date.getDate();
    const monthIndex = date.getMonth();
    const dayOfWeekIndex = date.getDay();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
  
    const formattedDate = `${dayOfMonth} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayOfWeekIndex]}`;
    const formattedDateShortened = `${dayOfMonth} ${monthsOfYearShortened[monthIndex]} ${daysOfWeekShortened[dayOfWeekIndex]}`;
  
    if (type === "day") {
      return daysOfWeek[dayOfWeekIndex];
    } else if (type === "hour") {
      return `${hours}:${minutes}`;
    } else if (type === "short") {
      return formattedDateShortened;
    } else {
      return formattedDate;
    }
};