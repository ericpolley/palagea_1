

import Navbar from '../components/Navbar';
import '../polley.css'




export default function Home() {
  return (
    <div className='mb-2'> 
    <Navbar />
    <h1>palagea.com</h1>

        
        <h5>Contact:</h5>
        <h6>Email: <a href='mailto:palageamatveev@gmail.com'>palageamatveev@gmail.com</a></h6>
        <h6>palagea.com</h6>
     
        </div>
  )
}
let counter = 0;
function Count(counter) {

    counter = counter++;
    console.log(counter);
}

