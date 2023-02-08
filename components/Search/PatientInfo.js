

const PatientInfo = () => {
  return (
    <div className='ml-24 w-full flex flex-col items-center h-max p-2'>
    <div> <a href={`/patient`} 
    className="mb-2 mr-2 ml-2 p-2 flex sm:flex-row flex-col cursor-pointer shadow-lg rounded-lg h-full sm:w-4/5 w-full bg-gray-900 ">
    <img alt="women" src="https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25" 
    class=" object-cover sm:w-1/3 h-full rounded-lg"/>
    <div className="sm:w-2/3 w-full h-12/12 p-5 flex flex-col items-left justify-center">
        <p class="mb-2 text-2xl font-medium f4 text-purple-500">
            {/* {value.title || "Patient Name "} */}
            John Doe
        </p>
        <p class="font-light f3 text-center text-white opacity-50 text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
        </p>
        {/* <div class="flex flex-wrap items-center mt-4 justify-starts">
            {
                value.tags &&  value.tags.match(/\b(\w+)\b/g).map((val) => {
                    return(
                        <a href={`/tags/${val}`} class="text-md mr-1 mb-1  py-1 px-4 f1  tag-border text-whiterounded-2xl rounded-full f4 text-purple-500 ">
                            {val}
                        </a>
                    )
                })
            }
        </div> */}
    </div>
</a></div>
</div>
  )
}

export default PatientInfo