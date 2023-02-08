const Show =({data, links})=>{

    return(
		<div className="sm:h-full h-max w-screen bg-ll flex items-center justify-center flex-col sm:flex-row home-bg">
			<div className="h-screen sm:w-2/5 w-screen p-10 flex items-center justify-center flex-col ">
                
                <h1 className="f5 text-purple-500 bg-gray-900 text-2xl p-2 text-center">Caring for Your Mental Health</h1>
                <div className="w-full h-5"></div>
                <h2 className="f3 text-xl text-white text-center">{data.description}</h2>
                <div className="w-full h-5"></div>
                <div className="h-20 m-3 w-full flex items-center justify-center flex-row">
                    
                    {links.facebook && 
                        <a href={links.facebook} className=" w-20 h-20 m-2 p-5 bg-purple-500 flex items-center justify-center">
                            <img src="/icons/my-facebook.svg" className="h-full w-full" />
                        </a>
                    }
                    {links.instagram && 
                        <a href={links.instagram} className=" w-20 h-20 m-2 p-5 bg-purple-500 flex items-center justify-center">
                            <img src="/icons/my-instagram.svg" className="h-full w-full" />
                        </a>
                    }
                    {links.github && 
                        <a href={links.github} className=" w-20 h-20 m-2 p-5 bg-purple-500 flex items-center justify-center">
                            <img src="/icons/my-github.svg" className="h-full w-full" />
                        </a>
                    }
                </div>
            </div>
			<div className="flex sm:h-screen sm:w-3/5 h-max  w-screen sm:flex items-center justify-center flex-col m-2">
				<img src="https://images.hindustantimes.com/img/2023/01/12/1600x900/human-brain-and-its-capabilities_4f427d58-d622-11e9-98d7-43b78744c7ea_1673521821466_1673521821466.jpg" alt={data.image1.alt} className="hidden sm:block object-cover h-20 sm:h-1/2 m-2 rounded-lg w-11/12 sm:w-2/3 shadow-lg" />
			</div>
		</div>
    )
}

export default Show