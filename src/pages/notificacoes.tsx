import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const {alternarTema} = useAppData()

  return (
    <Layout titulo="Notificações" subtitulo="Aqui aparece as suas notificações">
      <button onClick={alternarTema}>Alternar tema</button>
    </Layout>
  )
}
