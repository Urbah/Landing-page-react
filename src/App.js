import React from 'react';
import Jumbotron from './components/Jumbotron';
import Card from './components/Card'
import Nav from './components/Nav'
import Footer from './components/footer';
import img1 from './images/img-1.jpg';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';

const App = () => {
        const cardsList =[
            {
            title:'Titulo 1',
            img: img1,
            description: 'pasdkasp odkaspodk asdokap sodkaspo dkaspd'
        },{
            title:'Titulo 2',
            img: img2,
            description: 'pasdkasp odkaspodk asdokap sodkaspo dkaspd'
        },{
            title:'Titulo 3',
            img: img3,
            description: 'pasdkasp odkaspodk asdokap sodkaspo dkaspd'
        },{
            title:'Titulo 4',
            img: img4,
            description: 'pasdkasp odkaspodk asdokap sodkaspo dkaspd'
        }
    ]

    return (
        <>
            <Nav/>
            <div className='container'>
                <Jumbotron/>
                <div className='row'>
                    {cardsList.map(function(element){
                        return (
                            <div className='col-sm-6 col-md-3 my-2'>                    
                            <Card src={element.img}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default App;