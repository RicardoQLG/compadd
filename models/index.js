module.exports = (componentName) => `import React from 'react';

import { Container } from './styles';

function ${componentName}() {
  return <div>${componentName}</div>;
}

export default ${componentName};`;
