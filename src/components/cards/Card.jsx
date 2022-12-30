import React from 'react'
import './card.css'
import JS from '../../asetss/js.png'
import PHP from '../../asetss/php1.png'
import REACT from '../../asetss/react.png'
import VUE from '../../asetss/vue.png'
import PYTHON from '../../asetss/python.png'
import LARAVEL from '../../asetss/laravel.png'
import HTML from '../../asetss/html.png'
import CSS from '../../asetss/css.png'
import DJANGO from '../../asetss/django.png'
import ME from '../../asetss/me.jpg'
import DEV from '../../asetss/dev.jpg'
import DES from '../../asetss/desi.jpg'
import MARK from '../../asetss/marketing.jpg'
import CSHARP from '../../asetss/csharp.jpg'
import LC from '../../asetss/c.png'
import LINFO from '../../asetss/linfologi.jpg'
import REACTNA from '../../asetss/react-native.png'
import HTMLP from'../../asetss/htmlpng.png'
import {SiYoutube} from 'react-icons/si'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className='modal__title' id="contained-modal-title-vcenter">
        HTML Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='modal__container'>
          <h3>Overview</h3>
          <div className='modal__container-video'>
           <i> <SiYoutube/></i>  
            <p><a href="#"> history of html</a></p>
            <button>Preview</button>
          </div>

          <div className='modal__container-video'>
           <i> <SiYoutube/></i>  
            <p><a href="#"> html5vshtml(8:46)</a></p>
            <button>Start</button>
          </div>
          
          <div className='modal__container-video'>
           <i> <SiYoutube/></i>  
            <p><a href="#"> tools(16:35)</a></p>
            <button>Start</button>
          </div>

          <div className='modal__container-video'>
           <i> <SiYoutube/></i>  
            <p><a href="#">syntax(15:14)</a></p>
            <button>Start</button>
          </div>

          <div className='modal__container-video'>
           <i> <SiYoutube/></i>  
            <p><a href="#"> structure(16:14)</a></p>
            <button>Start</button>
          </div>

          <div className='modal__container-video'>
           <i> <SiYoutube/></i>  
            <p><a href="#"> attributes (8:09)</a></p>
            <button>Start</button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModale(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          CSS Video
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



const Card = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modaleShow, setModaleShow] = React.useState(false);
  return (
    <div className='content__container'>
      <h2>Cours Coding 100% Arabic</h2>
      <h4>SEASON DISCOUNT IS : MYFANS</h4>
     <h1>Featured Courses</h1>
    
     <div className='content__container-cards'>

     <div className='content__container-card'>
          <a  onClick={() => setModalShow(true)} ><img src={HTML}  alt="" width={100} height={220}/>
         
          <p>HTML5 SEO friendly from novice to <br /> master</p>
          <small>unlock the real power of html5 semantic and seo</small>
          </a>
          <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> 
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>20$</p>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          </div>
        </div>

        <div className='content__container-card'>
         <a onClick={() => setModaleShow(true)} > <img src={CSS} alt="" width={100} height={220}/></a>
         <MyVerticallyCenteredModale
        show={modaleShow}
        onHide={() => setModaleShow(false)}
      />
          <p>LEARN VUEJS 3 VUE ROUTER AND VUEX STATE MANAGEMENT</p>
          <small>f you're looking to get started building applications with VueJS 3</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>20$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={JS} alt="" width={100} height={210}/>
          <p>Apprendre JAVASCRIPT <br /> MODERNE</p>
          <small>Devenir un véritable devloppeur Javascript le Langage numero 1</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>35$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={PHP} alt="" width={100} height={200}/>
          <p>LEARN PHP MODERN WITH OBJECT ORIENTED PROGRAMMIMG OOP</p>
          <small>Learn the fundamentals of PHP and object-oriented programming (DARIJA OF MOROCCO).</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>49$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={REACT} alt="" width={100} />
          <p>Formation en ReactJS + Redux + Firebase</p>
          <small>Apprendre et maîtriser ReactJS avec Context API + Redux et construire un projet en temps réel</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>49$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={REACTNA} alt="" width={100} height={220}/>
          <p>LEARN VUEJS 3 VUE ROUTER AND VUEX STATE MANAGEMENT</p>
          <small>f you're looking to get started building applications with VueJS 3</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>60$</p>
          </div>
        </div>


        <div className='content__container-card'>
          <img src={VUE} alt="" width={100} height={220}/>
          <p>LEARN VUEJS 3 VUE ROUTER AND VUEX STATE MANAGEMENT</p>
          <small>f you're looking to get started building applications with VueJS 3</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>49$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={PYTHON} alt="" width={100} height={220}/>
          <p>LEARN VUEJS 3 VUE ROUTER AND VUEX STATE MANAGEMENT</p>
          <small>f you're looking to get started building applications with VueJS 3</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>60$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={LARAVEL} alt="" width={100} height={220}/>
          <p>LEARN VUEJS 3 VUE ROUTER AND VUEX STATE MANAGEMENT</p>
          <small>f you're looking to get started building applications with VueJS 3</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>49$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={DJANGO} alt="" width={100} height={220}/>
          <p>LEARN VUEJS 3 VUE ROUTER AND VUEX STATE MANAGEMENT</p>
          <small>f you're looking to get started building applications with VueJS 3</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>60$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={CSHARP} alt="" width={100} height={220}/>
          <p>LEARN VUEJS 3 VUE ROUTER AND VUEX STATE MANAGEMENT</p>
          <small>f you're looking to get started building applications with VueJS 3</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>60$</p>
          </div>
        </div>

        <div className='content__container-card'>
          <img src={LC} alt="" width={100} height={220}/>
          <p>LEARN VUEJS 3 VUE ROUTER AND VUEX STATE MANAGEMENT</p>
          <small>f you're looking to get started building applications with VueJS 3</small>
          <div className='content__container-card-dettails'>
            <img src={ME} alt="" />
            <p>60$</p>
          </div>
        </div>


     </div>
    
 
 </div>
  )
}

export default Card;