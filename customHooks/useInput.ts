import { useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handler = (e: { currentTarget: { value: string; }; }) => setValue(e.currentTarget.value);

  return { value, handler };
};

export default useInput;
