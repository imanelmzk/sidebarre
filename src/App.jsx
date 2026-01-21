import {useState} from 'react';

// on importe les icones dont on a besoin
import{
  ArrowLeftCircle,
  LayoutDashboard,
  Users,
  Settings,
  Files,
  Search
} from 'lucide-react';

const Sidebar = () => {
  //1. STATE: Pour savoir si le sidebar est ouvert (true) ou ferme (false)
  const[open, setOpen] = useState(true);

  // les données du menu (pour éviter de répéter le code HTML)
  const Menu = [
    {title: "Dashboard", icon: <LayoutDashboard size={20}/>},
    {title: "Utilisateurs", icon: <Users size={20}/>},
    {title: "Fichiers", icon: <Files size={20}/>},
    {title: "Recherche", icon: <Search size={20}/>},
    {title: "Paramètres", icon: <Settings size={20}/>, spacing :true} //spacing pour ajouter un écart 
  ];
  return (
    <div className='flex'>

      {/* -- Début de la SIDEBAR -- */}
      <div 
        className={`
            
          bg-slate-900/90 backdrop-blur-md  
          h-screen p-5 pt-8  
          ${open ? "w-72" : "w-20"}
          duration-300 relative transition-all ease-in-out
        `}
      >

        {/* --- BOUTON DE TOGGLE (la flèche) --- */}
        <ArrowLeftCircle
          className={`
            absolute cursor-pointer -right-3 top-9 text-white bg-slate-900 rounded-full
            border-2 border-slate-600
            ${!open && "rotate-180"} 
            transition-transform duration-300 
          `}
          size={30}
          onClick={() => setOpen(!open)}
          
          
          />
        {/* --- LOGO --- */}

        <div className='flex gap-x-4 items-center'>
          <div className={`
            cursor-pointer 
            duration-300 
            ${open && "rotate-[360deg]"}
            `}>
              {/* IMAGE */}
              🚀
          </div>
          <h1
            className={`text-white origin-left font-medium text-xl duration-200
              ${!open && "scale-0 hidden"}`} //Si fermé, on cache le titre
          >
            Mon Projet
          </h1>
        </div>

        {/* --- MENU --- */}
        <ul className='pt-6'>
          {Menu.map((menu, index) =>(
            <li
              key={index}
              className={`
                flex 
                rounded-md 
                p-2 
                cursor-pointer 
                hover:bg-white/10 
                text-gray-300
                text-sm
                items-center
                gap-x-4
                ${menu.spacing ? "mt-9" : "mt-2"}
                `}>
                  {/* L'icon */}
                  <span className='block float-left'>
                    {menu.icon}
                  </span>

                  {/* Le titre ou le texte du menu */}
                  <span 
                    className={`
                      text-base 
                      font-medium 
                      flex 
                      duration-200
                      ${!open && "hidden"} 
                      `} 
                    >
                      {menu.title}
                    </span> 
                </li>
          ))}
        </ul>
      </div>

      {/*   FIN DE LA SLIDE BAR   */}

      {/* CONTENU PRINCIPAL */}
      <div className='
        p-7
        text-2xl
        font-semibold
        flex-1
        h-screen
        bg-slate-100
      '>
        <h1>Page d'acceuil</h1>
        <p className='text-sm font-normal mt-2 text-gray-500'>
          Le contenue de l'application s'affichera ici
        </p>

      </div>
    </div>
  );
};
export default Sidebar;