import { Link } from 'react-router-dom';

import Salary from '../components/Salary';

const AboutPage = (props) => {
  return(
    <div>
      <h1>About</h1>
      <Salary />
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default AboutPage
