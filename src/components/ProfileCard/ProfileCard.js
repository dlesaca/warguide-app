import React from 'react';
import './ProfileCard.css';

function ProfileCard(props) {
  const profile = props.profile[0];

  const renderCard = () => {
    if (profile) {
      return (
        <p key={profile.id}>{profile.name}</p>
      )
    }
  }
  
  const renderPoints = () => {
    if (profile) {
      return profile.costs.map(cost => (
      <li className="point-v" key={cost.typeId}>
        <strong>{cost.name}: </strong> {cost.value}
      </li>
      ))
    }
  }

  const renderAbilities = () => {
    if (profile) {
      if (profile.profiles) {
        return profile.profiles.profile.map(ability => (
          ability.$.typeName === "Abilities" ?
          <li key={ability.$.id }>
            <div className="ability-name">
              <strong>{ability.$.name} </strong>
            </div>
            {ability.characteristics[0].characteristic.map(stat => (
              <div className="ability-description">{stat["_"]} </div>
            ))}
          </li>
          : null
        ))
      }
    }
  }

  return (
    <article className="profile-card">
      <h2 className="profile-card__title">
        {profile ? renderCard() : null}
      </h2>
      <ul className="point-list">
        {profile ? renderPoints() : null}
      </ul>
      <ul className="ability-list">
        {renderAbilities()}
      </ul>
    </article>
  )
}

export default ProfileCard;