import PageLayout from "@/components/PageLayout/pageLayout"
import Buyinglink from "@/components/buyingLink/buyingLinks";
import gameInfo from "@/data/GameLibrary.json"

// export function generateStaticParams() {
// return gameInfo.map(games => ({
//    gamepages: games.linkTitle
// }))
// }

export default function Pages({params: {gamepages}}){

    const game = gameInfo.find( game => game.linkTitle === gamepages)

    if (!game) throw new Error();

  return(
    <PageLayout>
      <section className="text-gray-400 bg-zinc-900 body-font">
  <div >
    <div className="flex mx-auto border-8 border-purple-300 border-opacity-20 bg-opacity-40 w-8/12 aspect-video mt-4"
      style={{ borderWidth: "40px"}}>
      
    <iframe
    width="1000px" height="540px" 
                src={game.trailer}
                title="YouTube video player" 
                autoplay={1}
                frameborder="0" 
                allow="accelerometer; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                allowFullScreen
            >
            </iframe>
    </div>

    <div className="flex flex-col sm:flex-row mt-10 w-10/12 mx-auto">

        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
    
      <Buyinglink game={game}/>


        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed py-4 my-2 text-lg">{game.gameOverview}</p>
        
        </div>
      </div>


  </div>
</section>
    </PageLayout>
  )
}


