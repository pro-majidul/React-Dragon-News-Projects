import React from 'react';
import Header from '../components/Header';
import Latestnews from '../components/Latestnews';
import Navbar from '../components/Navbar';
import LeftLayout from '../components/layout/LeftLayout';
import RightNav from '../components/layout/RightNav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-5'>
                    <Latestnews></Latestnews>
                </section>
            </header>
            <nav className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 gap-3 grid md:grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftLayout></LeftLayout>
                </aside>
                <section className='col-span-6'> <Outlet></Outlet></section>
                <aside className='col-span-3'> <RightNav></RightNav> </aside>
            </main>
        </div>
    );
};

export default Home;