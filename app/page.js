
import GameCard from '@/components/GameCard/GameCard'
import PageLayout from '../components/PageLayout'
import gameInfo from "../data/GameLibrary.json"

export default function Home() {
  return (
    <>
    <PageLayout>

    <div className=' '>
    <GameCard gameInfo={gameInfo}/>
    </div>
 
    </PageLayout>
    </>
  )
}
