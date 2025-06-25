import React, {useState} from "react";





const projects = [
    { name: "TaskTree", category: "Web", link:"https://tasktree-sable.vercel.app/", description:"All in one platform integrating multiple study techniques and task management tools for students", img: "/tasktreeThumbnail.png" },
    { name: "WeatherApp", category: "Web", link:"https://weatherapp-o9au.vercel.app/", description:"Broadcast weather within a 5 day timeframe", img: "/wAppThumbnail.png"},
    { name: "TicTacToe", category: "Game", link: "https://tictactoe-jade-xi.vercel.app/", description:"App to play tic tac toe", img: "/tttThumbnail.png"}
];

const categories = ["All","Web", "Game"]
export default function Projects(){

    const [catInput, setcatInput] = useState("All")

    const filterList = catInput === "All" ? projects : projects.filter(p => p.category === catInput)



    return(
        <>
        <div>
            <h1 className="text-center font-bold text-3xl">Projects</h1>
        </div>


        <select className="py-10"value={catInput} onChange={(e)=> setcatInput(e.target.value)}>
            {/* create droppable menu of options */}
            {categories.map( (cat) => (
                <option key={cat} value={cat}>{cat}</option>
            ))}
        </select>

        {filterList.length > 0 ? (
    filterList.map((project, idx) => (
        <a href={project.link} target="_blank">
    <div>
      <li key={idx} className="p-4 border shadow-sm list-none transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-md  ">

        <div className="flex justify-between ">
            <div className="flex-col">
        <h3 className="font-semibold">{project.name}</h3>
        {/* blank opens in new tab */}
       <img src={project.img} alt="Proj Img"className="object-cover w-40 h-40"></img>
        </div>
        <p className="text-sm text-gray-500">{project.description}</p>
        </div>
      </li>
      </div>
      </a>
      
    ))

) : (
  <p className="text-gray-500">No projects found for this category.</p>
)}
        
        
        
        
        </>
    );
}