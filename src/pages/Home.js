import React from "react"


export default function Home(){
    return(
        <div>
            {/* mx auto centers our profile box */}
        <div className=" animate-transitionIn mt-24 bg-white w-full max-w-[800px] rounded-[10px] shadow-md mx-auto px-[75px] py-[100px] mb-24 ">  
            
            <div className="flex items-center justify-between flex-wrap">
                <div className="flex-col max-w-md">
                    <h1 className="font-bold text-3xl">Hi, I am Jason Zhao</h1>
                    <br></br>
                    <p>I am a third year Computer Science major at UC Davis aspiring to become a software engineer</p>
                </div>
                <img src="/pfp.jpeg" className="object-cover rounded-full w-40 h-40"alt="Profile"></img>
            </div>
            <div className="flex gap-6 py-10 ">

                {/* w-32 set fixed width to allow for same size button despite differing length in text */}
                <button className="w-32 border rounded border-black px-2 py-2 hover:bg-gray-50"><a className="text-lg"href="https://www.linkedin.com/in/jason-zhao-a307b5312/">Linkedin</a></button>
                <button className="w-32 border rounded border-black px-2 py-2 hover:bg-gray-50"><a className="text-lg"href="https://github.com/jazhao28">Github</a></button>

            </div>

        </div>
        </div>

    );
}