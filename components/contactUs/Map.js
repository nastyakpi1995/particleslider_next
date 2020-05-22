import React from 'react';

import {Location, Image, Link} from '../../styled/components/contactUs';
import {geoLocation} from '../../constants/contactUs';

const Map = () => (
  <Location>
    <Link href={geoLocation}>
      <Image src={"images/location.png"} alt="location"/>
    </Link>
  </Location>
);

Map.propTypes = {};

export default Map;
