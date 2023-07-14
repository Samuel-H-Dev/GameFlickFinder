
export default function GameCard({ gameInfo }) {

  return (
  <section className="">
    <section className="text-gray-400 body-font bg-gray-900">
    <div className="flex flex-wrap flex-row">
      
    {gameInfo.map((gameInfo) => {
      return (
        
        <div className="xl:w-1/4 md:w-1/2 p-4">
               <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                 <img className="h-40 rounded w-full object-fit object-center mb-6" src={gameInfo.image} alt={`image of ${gameInfo.title} game cover`} />
                 <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">{gameInfo.rating}</h3>
                 <h2 className="text-lg text-white font-medium title-font mb-4">{gameInfo.title}</h2>
                 <p className="leading-relaxed text-base">{gameInfo.description}</p>
               </div>
           </div>
      

        // 
        //     
        
        
        // </section>
      )
    })}
      
    </div>
    </section>

  </section>
  )
}