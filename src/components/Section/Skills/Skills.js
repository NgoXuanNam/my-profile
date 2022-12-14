import React from 'react';

export default function Skills() {
    return (
        <div id="skills" className="text-center mb-16 ">
            <div className="skills__title mb-12">
                <h3 className="text-[4.5rem] font-semibold text-[#fff]">My Skills</h3>
                <div className="h-[4px] w-[200px] bg-white ml-auto mr-auto rounded-xl"></div>
            </div>
            <div className="skills__content w-[80%] min-h-[120px] bg-slate-400 ml-auto mr-auto text-[2.5rem] text-left p-6 leading-[5rem] rounded-[25px]">
                <p>- Experience in using JavaScript, HTML, CSS, SCSS.</p>
                <p>- Experience with ReactJS, React-Router.</p>
                <p>- Responsive for a better user experience</p>
                <p>- Have experience in Git</p>
                <p>- Read and understand English documents</p>
                <p>- Friendly with TailwindCSS, Styled components, Bootstrap</p>
            </div>
        </div>
    );
}
