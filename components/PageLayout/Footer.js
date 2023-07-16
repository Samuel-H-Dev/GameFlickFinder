export default function Footer(){


  return(
    <>
    <footer class="text-zinc-400 bg-zinc-900 body-font border-t-4 border-slate-500">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
   
    </a>

    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
  
       
      <a href="https://github.com/Samuel-H-Dev" target="_blank"> <button className="inline-flex rounded-full text-white bg-green-500 border-0 py-1 px-1 focus:outline-none hover:bg-green-600  text-lg aspect-square"><img src="/images/GithubLogo.png" className="max-w-10 max-h-10 w-fit" /></button></a>


       <a href="https://linkedin.com/in/samuel-holmes-dev" target="_blank"> <button on className="ml-4 inline-flex text-zinc-400 bg-zinc-800 border-0 py-1 px-1 focus:outline-none hover:bg-zinc-700 hover:text-white rounded-full text-lg aspect-square"><img src="/images/LinkedinLogo.png" className="max-w-10 max-h-10 w-fit" /></button> </a>   

    </span>
  </div>
</footer>
    </>
  )
}