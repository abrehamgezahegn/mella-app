import { useState } from "react";

const useModal = props => {
  const [visible, setVisible] = useState(false);

  const toggleTo = state => setVisible(state);

  const close = () => setVisible(false);
  const open = () => setVisible(true);

  return { visible, close, open, toggleTo };
};

export default useModal;
