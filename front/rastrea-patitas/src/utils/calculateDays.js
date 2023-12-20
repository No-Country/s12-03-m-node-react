function calculateDay(dateString) {
    const initialDate = new Date(dateString);
    const currentDate = new Date();
  
    const timeDifferenceInMilliseconds = currentDate - initialDate;
    const daysDifference = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    return daysDifference;
  }

  export default calculateDay