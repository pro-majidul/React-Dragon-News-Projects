import React from 'react';
import Header from '../components/Header';
import Latestnews from '../components/Latestnews';

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-5'>
                    <Latestnews></Latestnews>
                </section>
            </header>
            <nav></nav>
        </div>
    );
};

export default Home;