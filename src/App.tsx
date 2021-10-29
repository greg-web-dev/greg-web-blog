import { BrowserRouter as Router } from 'react-router-dom';
import { Menu, MenuBtn } from '@greg-web-dev/web-components';
import { useState } from 'react';

const App = () => {
  const [active, setActive] = useState(false);

  const menuOptions = [
    {
      name: 'Home',
      url: '#home',
    },
    {
      name: 'sadklfjadlkfj',
      url: '#blog',
    },
  ];

  return (
    <Router>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'skyblue',
        }}
      >
        <Menu active={active} onClick={() => setActive(false)} menuOptions={menuOptions} />
        <MenuBtn
          active={active}
          onClick={() => setActive(!active)}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: 8,
          }}
        />
      </div>
    </Router>
  );
};

export default App;
