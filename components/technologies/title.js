import React from 'react';
import PropTypes from 'prop-types';

import { TitledWrapper } from '../../styled/components/technologies/technologies';

const Title = ({ title, message }) => ( 
  <TitledWrapper>
      <h3 className="TechTitle">
        {title}
      </h3>
      <p className="TechMess">
        {message}
      </p>
  </TitledWrapper>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default Title;
