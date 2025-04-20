import './Contact.css';
import Map from '../../assets/images/Map.png';


function Contact() {
  
  return (
    <div className='Contact'>
        <img src={Map} alt="" />
        <div className='Map-info d-flex'>
            <div>
                <p className='Map-title'>ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ ДИЛЕРОВ</p>
            </div>
            <div>
                <p>ул. Большая <br />
                    Конюшенная, д. 19/8
                </p>
                <p>Санкт-Петербург</p>
            </div>       
        </div>
    </div>
    
  );
}

export default Contact;