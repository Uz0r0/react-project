import './Home.css';
import CatCard from '../../components/CatCard/CatCard';
import Header from '../../components/Header/Header';
import Steps from '../../components/Steps/Steps';
import Example from '../../components/Example/Example';
import slimIcon from '../../assets/images/cat_back.png';
import proIcon from '../../assets/images/cat.png';
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';
import num1 from '../../assets/images/1.png';
import num2 from '../../assets/images/2.png';
import num3 from '../../assets/images/3.png';
import num4 from '../../assets/images/4.png';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';


function Home() {
  
  return (
    <>
      <Header />
      
      <div className="cards-container">
        <CatCard
          icon={slimIcon}
          title="ПОХУДЕНИЕ"
          description="Ваш кот весит больше собаки и почти утратил способность 
                        лазить по деревьям? Пора на диету! Cat Energy Slim поможет 
                        вашему питомцу сбросить лишний вес."
          catalogLabel="КАТАЛОГ SLIM"
          catalogLink="/catalog/slim"
          titleWidth={320}
        />
        <CatCard
          icon={proIcon}
          title="НАБОР МАССЫ"
          description="Заработать авторитет среди дворовых котов и даже собак?
                        Серия Cat Energy Pro поможет вашему коту нарастить 
                        необходимые мышцы!"
          catalogLabel="КАТАЛОГ PRO"
          catalogLink="/catalog/pro"
        />
      </div>

      <div className='Steps'>
        <h1>Как это работает</h1>

        <div className='d-flex'>
          <Steps
            icon={icon1}
            description="Функциональное питание
                          содержит только полезные
                          питательные вещества."
            number={num1}
            width={200}
          />

          <Steps
            icon={icon2}
            description="Выпускается в виде порошка, 
                          который нужно лишь залить 
                          кипятком и готово."
            number={num2}
            width={230}
          />

          <Steps
            icon={icon3}
            description="Замените один-два приема 
                          обычной еды на наше 
                          функциональное питание."
            number={num3}
          />

          <Steps
            icon={icon4}
            description="Уже через месяц наслаждайтесь 
                          изменениями к лучшему 
                          вашего питомца!"
            number={num4}
          />
        </div>
        
      </div>

   
      <Example />

      <Contact />

      <Footer />
     
    </>
  );
}

export default Home;