import Like from './Like'
import React, {
  useEffect,
  useState
} from 'react';

function MyChannels() {
const [Loader, setLoader] = useState(true);

useEffect(() => {
  setTimeout(() => setLoader(false), 1000)
}, []);

  const data = [ { id: 1, name: "First" },
                 { id: 2, name: "Second" },
                 { id: 3, name: "Third" },
                 { id: 4, name: "Fourth" },
                 { id: 5, name: "Fifth" }
               ];

  let channels = data.map((item, key) =>
    <h2 key={item.id}>{item.name}
    &nbsp;
    &nbsp;
    &nbsp;
      <Like />
    </h2>
  );
  return Loader ? <div> Loading </div> : <div> {channels} </div>;
}

export default MyChannels
