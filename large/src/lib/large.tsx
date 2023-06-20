
import * as LargeMock from './mock';

export function Large() {
  const mocks = Object.values(LargeMock)
  return (
    <div>
      <h1>Welcome to Large!</h1>
      <p>from  Array *. Length: {mocks.length}</p>
      <ul>
        {mocks.map((Mock, index) => (
          <li key={index}>
            <Mock />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Large;
