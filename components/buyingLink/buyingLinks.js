


export default function Buyinglink({ game }) {



  return(
    <>
    
        {(game.PS)
      ? <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"><a className="hover:underline" href={game.PS}>Download on Playstaion Here </a></h1>
      : <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"> Game is not avalible on Platform</h1>
        }

        {(game.XB)
      ? <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"><a className="hover:underline" href={game.XB}>Download on X-Box Here </a></h1>
      : <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"> Game is not avalible on X-Box</h1>
        }

        {(game.Switch)
      ? <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"><a className="hover:underline" href={game.Switch}>Download on Switch Here </a></h1>
      : <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"> Game is not avalible on Switch</h1>
        }

        {(game.PC)
      ? <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"><a className="hover:underline" href={game.PC}>Download on PC Here </a></h1>
      : <h1 className="px-8 hover:bg-slate-600 py-4 my-5 mx-3 bg-slate-700 rounded"> Game is not avalible on Platform</h1>
        }

  

      

    </>
  )
}