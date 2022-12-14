import React from 'react';
import CoffeeShop from './CoffeeShop';
import Envato from './Envato';
import MusicPlayer from './MusicPlayer';
export default function Projects() {
    return (
        <div id="projects" className="text-center mb-16 ">
            <div className="projects__title mb-12">
                <h3 className="text-[4.5rem] font-semibold text-[#fff]">My Projects</h3>
                <div className="h-[4px] w-[200px] bg-white ml-auto mr-auto rounded-xl"></div>
            </div>
            <Envato />
            <CoffeeShop />
            <MusicPlayer />
        </div>
    );
}
