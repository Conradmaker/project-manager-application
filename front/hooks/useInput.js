import { useCallback, useState } from "react";

export default function useInput(initialValue = null) {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue];
}
