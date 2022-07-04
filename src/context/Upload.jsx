import { createContext, useState, useMemo } from 'react';

const UploaderUrlContext = createContext();
const UploaderUrlUpdaterContext = createContext();

// eslint-disable-next-line react/prop-types
function UploaderUrlProvider({ children }) {
  const [uploaderUrlState, setUploaderUrlState] = useState(null);
  return (
    <UploaderUrlContext.Provider
      value={useMemo(() => uploaderUrlState, [uploaderUrlState])}
    >
      <UploaderUrlUpdaterContext.Provider
        value={useMemo(() => setUploaderUrlState, [setUploaderUrlState])}
      >
        {children}
      </UploaderUrlUpdaterContext.Provider>
    </UploaderUrlContext.Provider>
  );
}
export { UploaderUrlContext, UploaderUrlUpdaterContext, UploaderUrlProvider };
