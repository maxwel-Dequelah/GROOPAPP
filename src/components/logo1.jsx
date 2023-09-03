import logo1 from '../media/logo1.png'
import { useNavigate } from 'react-router-dom';



function Logo1(){
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }

    return (
        <a  href='/'
            onClick={e=>{
                handleClick()
                e.preventDefault()
            }  
        }>

            <img src={logo1} alt="" 
                srcset="" className="rounded mx-auto d-block w-25 vh-75" 
                />
        </a>
    )
}

export default Logo1;