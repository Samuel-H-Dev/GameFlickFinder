


export default function Buyinglink({ game }) {



  return(
    <>
    
        {(game.PS)
      ?  <a className="hover:underline" href={game.PS}><h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded">Download on Playstaion Here </h1></a>
      : <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"> Game is not avalible on Platform</h1>
        }

        {(game.XB)
      ? <a className="hover:underline" href={game.XB}><h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded">Download on X-Box Here </h1> </a>
      : <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"> Game is not avalible on X-Box</h1>
        }

        {(game.Switch)
      ? <a className="hover:underline" href={game.Switch}><h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded">Download on Switch Here </h1> </a>
      : <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"> Game is not avalible on Switch</h1>
        }

        {(game.PC)
      ? <a className="hover:underline" href={game.PC}><h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded">Download on PC Here </h1> </a>
      : <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"> Game is not avalible on Platform</h1>
        }

  

      

    </>
  )
}