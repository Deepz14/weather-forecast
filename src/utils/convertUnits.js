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
  