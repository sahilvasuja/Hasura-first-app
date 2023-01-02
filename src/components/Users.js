import React from "react";
import { useQuery, gql } from "@apollo/client";
const USERS = gql`
  {
    users {
      id
      name
      last_seen
      created_at
    }
  }
`;

export const Users = () => {
  const { loading, error, data } = useQuery(USERS);
  console.log(error);
  console.log(data);
  console.log(loading);
  if (loading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (data.users.map(({ id, name }) => (
    <div key={id}>
    <div className="flex bg-gray-500 text-center justify-center font-bold items-center mx-2 ">
    
      <p>{name}</p>
    </div>
    
    </div>
  )
  )
  )
}
