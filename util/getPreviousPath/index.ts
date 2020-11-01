const getPreviousPath = (fullPath: string) => {
  let previousPath = "";
  const parts = fullPath.split("/");
  parts.pop();

  for (let part of parts) {
    if (part) {
      previousPath += part;
    } else {
      previousPath += "/";
    }
  }

  return previousPath;
};

export default getPreviousPath;
