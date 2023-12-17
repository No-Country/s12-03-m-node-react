function formatDate(dateString) {
  // Parse the ISO 8601 date string
  const date = new Date(dateString);

  // Extract day, month, and year

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);



  // Return formatted date
  return `${day}-${month}-${year}`;
}

export default formatDate