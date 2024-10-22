export default async function Portfolio(){
    
    await new Promise((resolve) => {
        setTimeout (resolve ,3000)
      })
    
    return(
        <div  className="grid justify-center mt-56 p-2 text-purple-500 text-4xl font-extrabold font-serif text-center">
            <h1>Hey Sir!</h1>
            <p>This is my Portfolio Page</p>
        </div>
    )
}