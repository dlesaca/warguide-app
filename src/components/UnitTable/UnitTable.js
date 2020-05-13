import React from 'react';
import data from '../../data/tau-weapons.json';


function WeaponTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          {
            data[0].characteristics.map((characteristic) => {
              return (
                <th key={characteristic.typeId}>{characteristic.type}</th>
              )
            })
          }
          {
            data[0].costs.map((cost) => {
              return (
                <th key={cost.typeId}>{cost.name}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((weapon, index) => {
            return (
              <tr>
                <td key={index}>{weapon.name}</td>
                {
                  weapon.characteristics.map((characteristic) => {
                    return (
                      <td key={characteristic.typeId}>{characteristic.value}</td>
                    )
                  })
                }
                {
                  weapon.costs.map((cost) => {
                    return (
                      <td key={cost.typeId}>{parseFloat(cost.value)}</td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default WeaponTable;