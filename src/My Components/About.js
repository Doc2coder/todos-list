import React from 'react'
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <Link to="/App">
        <button>Go to Todos</button>
        This is my Components 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Harum in facilis inventore sapiente quod quo enim autem 
            necessitatibus optio expedita odio numquam laudantium odit
             incidunt eos modi officia, fugit nam rem dolorum assumenda
              ut tenetur, voluptate consequatur. Non distinctio quod est 
              suscipit, numquam deserunt.</p>
              </Link>

    
    </div>
  )
}
export default About;
