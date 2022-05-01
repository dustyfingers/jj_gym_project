import { useState } from 'react';
import { 
    Container,
    Button
}from '@mui/material';

import Header from 'components/Header';
import Footer from 'components/Footer';

const LandingPage = () => {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <div>
        <Header />

        <Container>
            <ul>
                {names.map(name => (
                <li key={name}>{name}</li>
                ))}
            </ul>

            <Button variant={'contained'} color={'primary'} onClick={handleClick}>Like ({likes})</Button>
        </Container>


        <Footer />
    </div>
  )
}

export default LandingPage