import style from "./AppHeader.module.css";

const AppHeader = () => {
  console.log(style);
  

  return (
    <header className="header">
      <h1 className={style.title}>
        Questo è il header
      </h1>
    </header>
  )
}

export default AppHeader;