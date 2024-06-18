import * as LargeMock from './mock';

export function Large() {
  const mocks = Object.values(LargeMock)
  return (
    <div>
      <h1>Welcome to Large123!</h1>
      <p>from  Array *. Length: {mocks.length}</p>
      <ul>
        {mocks.map((Mock, index) => (
          <li key={index}>
            {index}. <Mock index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Large;
