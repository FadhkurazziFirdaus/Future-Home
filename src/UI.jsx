import React from 'react';
import { APPLIANCE_DATA } from './Appliances';

export function UI({ onAddAppliance, placedAppliances }) {
  const totalEnergy = placedAppliances.reduce((sum, item) => {
    return sum + APPLIANCE_DATA[item.type].energy;
  }, 0);

  return (
    <div className="ui-container">
      <div className="appliance-buttons">
        <h3>Appliances</h3>
        {Object.keys(APPLIANCE_DATA).map((key) => (
          <button key={key} onClick={() => onAddAppliance(key)}>
            {APPLIANCE_DATA[key].name} ({APPLIANCE_DATA[key].energy}W)
          </button>
        ))}
      </div>
      <div className="score">
        <h3>Total Energy Consumption</h3>
        <p>{totalEnergy} Watts</p>
        <h3>Sustainability Score: {totalEnergy <= 0 ? 'A+' : totalEnergy <= 500 ? 'A' : totalEnergy <= 1000 ? 'B' : totalEnergy <= 2000 ? 'C' : 'D'}</h3>
      </div>
    </div>
  );
}
