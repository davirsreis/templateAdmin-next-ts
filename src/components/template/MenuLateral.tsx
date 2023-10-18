import { IconeAjustes, IconeCasa, IconeNotificacao } from "../icons";
import MenuItem from "./MeunItem";

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Início" icone={IconeCasa} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeNotificacao} />
      </ul>
    </aside>
  )
}