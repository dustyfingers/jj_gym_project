import { useState } from 'react';
import Button from '@mui/material/Button';

import Header from 'components/Header';

const LandingPage = () => {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <Button variant={'contained'} color={'primary'} onClick={handleClick}>Like ({likes})</Button>
    </div>
  )
}

export default LandingPage