import { IconeAjustes, IconeCasa, IconeLogout, IconeNotificacao } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MeunItem";

export default function MenuLateral() {
  return (
    <aside className={`
    flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-900
    `}>
      <div className={`
      flex flex-col items-center justify-center
      bg-gradient-to-r from-indigo-500 to-purple-800
      h-20 w-20
      `}>
        <Logo />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeNotificacao} />
      </ul>
      <ul>
        <MenuItem texto="Sair" icone={IconeLogout}
        onClick={() => console.log('Deslogando')}
        className={`
          text-red-600 dark:text-red-400
          hover:bg-red-400 hover:text-white
          dark:hover:text-white
        `} />
      </ul>
    </aside>
  )
}