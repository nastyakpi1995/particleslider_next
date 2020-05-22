import React from 'react';

import {Input, Email} from '../../styled/components/contactUs';

const Form = () => (
  <Input>
    <form>
      <Email
        id="email"
        type="email"
        label="Обратная связь"
        placeholder="Email"
      />
    </form>
  </Input>
);

Form.propTypes = {};

export default Form;
