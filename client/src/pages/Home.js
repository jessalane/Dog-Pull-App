import BigDog from '../assets/images/robot-dog-airplane.png'
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <img
                    className='home-img'
                    src={BigDog}
                    alt='Big Dog'
                />
            </div>
        </div>
    )
}

export default Home;