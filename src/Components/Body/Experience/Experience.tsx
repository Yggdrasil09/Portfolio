import React from 'react';
import { Chrono } from 'react-chrono';

import { colors } from '../../../Utilities/data/colors';
import { experience } from '../../../Utilities/data/experience';
import './Experience.scss';

function Experience(): JSX.Element {
  return (
    <div className="expCon">
      <div className="expHeader">
        <h4>02. </h4>
        <h2>My Experience</h2>
      </div>
      <div className="expTimeline">
        <Chrono
          items={experience}
          theme={{
            primary: colors.secondaryColor,
            secondary: colors.tertiaryColor,
            cardBgColor: colors.secondarytextColor,
            cardForeColor: colors.primaryColor,
          }}
          useReadMore={false}
          mode="VERTICAL"
        />
      </div>
    </div>
  );
}

export default Experience;
