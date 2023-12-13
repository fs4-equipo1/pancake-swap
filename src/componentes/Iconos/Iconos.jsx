import styles from "./Iconos.module.scss";

export const Iconos = ({ icono, href, estiloAdicional }) => {
  const clasesIcono = estiloAdicional ? `${styles.icono} ${styles["icono-adicional"]}` : styles.icono;

  return (
    <a className={clasesIcono} href={href} target="_blank" rel="noreferrer">
      {icono}
    </a>
  );
};