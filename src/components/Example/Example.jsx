import './Example.css';
import examplePicture from '../../assets/images/image_cat_desktop.png';
import slider from '../../assets/images/slider.png';

function Example() {
  
  return (
    <div className='Example'>
        <h1>Живой пример</h1>
        <div className='ex-info'>
            <p className='main-info'> Борис сбросил 5 кг за 2 месяца, просто заменив свой 
                обычный корм на Cat Energy Slim. Отличный результат 
                без изнуряющих тренировок! При этом он не менял своих 
                привычек и по-прежнему спит по 16 часов в день. </p>
            <div className='square-info d-flex'>
                <div className='square'>
                    <p className='CENTER'>5 КГ</p>
                    <p className='Bottom'>снижение веса</p>
                </div>
                <div className='square'>
                    <p className='CENTER'>60 ДНЕЙ</p>
                    <p className='Bottom'>затрачено времени</p>
                </div>
            </div>
            
        </div>
        <div className='d-flex'>
            <div className='cost d-flex'>
                <p>ЗАТРАТЫ НА ПИТАНИЕ:</p>
                <p>15 000 РУБ.</p>
            </div>
            <img src={examplePicture} alt="" className='examplePicture'/>
            <div className='slider d-flex'>
                <p>БЫЛО</p>
                <img src={slider} alt="" />
                <p>СТАЛО</p>
            </div>
        </div>
    </div>
    
  );
}

export default Example;