import React from 'react';
import './WeaponTable.css';
import data from '../../data/weapons-formatted.json';

function WeaponTable() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Range</th> 
        <th>Type</th> 
        <th>S</th>
        <th>AP</th> 
        <th>D</th> 
        <th>Abilities</th> 
      </tr>
      {
        data.map((weapon, index) => {
          return (
            <tr>
              <td key={index}>{weapon.name}</td>
              {
                weapon.characteristics.map((characteristic, index) => {
                  return (
                    <td key={index}>{characteristic.value}</td>
                  )
                })
              }
            </tr>
          )
        })
      }
    </table>
  )
}

export default WeaponTable;