import React from 'react';
export default function Town({town,id}) {
  return (
    <>
      <li id={`town${id}`}><button>{town.name}</button></li>
    </>
  )
}
