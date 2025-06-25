import React from "react";


export default function About(){

    return(
        <>
        
        <div className="flex justify-center items-center gap-10">
        <img src="/secondpfp.jpeg" className="object-cover rounded-full w-40 h-40"alt="Profile"></img>
        <div>
            <h3>Contact Information</h3>
            <ul>
                <li>Email: jazhao28@gmail.com</li>
                <li>Phone: 415-123-4567</li>
            </ul>
        </div>

        </div>
        <br></br>
        <div>
            <h3 className="font-bold text-3xl my-3">Personal Background</h3>
            <ul  className="list-disc ml-6 space-y-2 text-gray-700">
                <li>Hometown: San Francisco</li>
                <li>Hobbies: Basketball, Reading Manga</li>
                <li>Favorite Foods: Banh mi, mapo tofu, Chinese BBQ pork</li>
            </ul>
        </div>
        <br></br>
        <div>
            <h3 className="font-bold text-3xl ">School</h3>
            <ul  className="list-disc ml-6 space-y-2 text-gray-700 my-3">
                <li>University of California Davis (Sept 2022-June 2026)</li>
                <li>Extra curriculars: Swift Coding Club, Google Developer Student Club</li>
                
                
                <li>CourseWork: Machine Learning, Algorithm Design & Analysis, Computer Vision</li>
                
            </ul>
        </div>
        <br></br>
        <div>
            <h3 className="font-bold text-3xl">Technical Skills</h3>
            <ul  className="list-disc ml-6 space-y-2 text-gray-700 my-3">
                <li>Langauges: Python, C, C++, Golang, Javascript, Typescript Golang</li>
                <li>Libraries/Frameworks: React, BeautifulSoup, Next.js, TailwindCSS, Numpy, Scikit-learn, TensorFlow, Pandas, Flask</li>
                <li>Developer Tools: Git Firebase</li>
            </ul>
        </div>
        </>
    );
}