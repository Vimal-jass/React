import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='cl'>
    <Card  user = 'aman' para = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate assumenda ipsa soluta tenetur est modi itaque! Porro sed tenetur inventore minima molestias nobis, voluptatibus corporis aliquam nam eaque repellendus ad ab natus dolores voluptatum beatae aliquid repudiandae facilis aspernatur."/>
    <Card  user = 'sarthak'  para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate assumenda ipsa soluta tenetur est modi itaque! Porro sed tenetur inventore minima molestias nobis, voluptatibus corporis aliquam nam eaque repellendus ad ab natus dolores voluptatum beatae aliquid repudiandae facilis aspernatur."   />
  
    </div>
   
  )
}

export default App