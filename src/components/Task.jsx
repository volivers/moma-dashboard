import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Task = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          Date of Task | Content of task
      </Alert>
    );
  }
}

export default Task;