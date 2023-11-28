import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  console.log(users)
  return (
    <>
      <Button color="primary">{users[0]?.first_name.toUpperCase()}</Button>
    </>
  )
}