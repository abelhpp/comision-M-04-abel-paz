import React from 'react';
import { Form } from 'react-bootstrap';

const BoxComment = ({ list }) => {
    
    
    return (
      <div>
        {list.map(id => (
          <div key={id}>
            <Form.Control
              as="textarea"
              style={{ height: '100px' }}
              value={`Comment: ${id}`}
              readOnly
            />
          </div>
        ))}
      </div>
    );
  };

export default BoxComment;

