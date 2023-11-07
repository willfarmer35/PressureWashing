import react from 'react'
import NavBar from '../items/NavBar'

import './about.css'
const About = () => {

    return(
        
        <div className ='main'>
       <NavBar/>
     
        <div className='OurStory'>
        <header>
            <h1>Humble Beginnings</h1>
        </header>
        <div className='paragraph'>
        Starting off with a loan from his Father in the summer of 2017, Will Farmer began asking family and friends if they needed a hand cleaning up their driveways. After that, he began going door to door, and later advertising the business on social media sites such as NextDoor and Facebook to drum up business for the high school student. 
        </div>
        <footer>
        <img src='images/IMG_4101.jpg' className='pic'/>
        <img src='images/IMG_0044.jpg' className='pic'/>
        </footer>
        </div>

        <div className='OurStory'>
        <header>
            <h1>Our Mission</h1>
        </header>
        <div className='paragraph'>
            Serving our clients, going the extra mile to make sure that whatever we are doing, it is our most honest sincere attempt at providing the best possible experience for the customer is the heartbeat of this organization. Placing value on hard-work, fair pricing, and adaptibility, we appreciate any opportunity given to us to inspire growth in our small business.
        </div>
        </div>
        
        
        </div>
    )
}
export default About