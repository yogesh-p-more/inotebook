import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext';

const About = () => {
  const a = useContext(NoteContext);
  return (
    <div>
      this is about {a.name} and class {a.class}
    </div>
  )
}

export default About