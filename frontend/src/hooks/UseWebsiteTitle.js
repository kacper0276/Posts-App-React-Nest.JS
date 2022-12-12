import { useEffect } from "react";

export default function UseWebsiteTitle(title) {
  const setTitle = (newTitle) => {
    if (newTitle) {
      document.title = newTitle;
    }
  };

  useEffect(() => {
    setTitle(title);
  }, [title]);
}
