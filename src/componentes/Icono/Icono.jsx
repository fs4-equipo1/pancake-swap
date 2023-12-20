import styles from "./Icono.module.scss";

export const Icono = ({ icono, href, estiloAdicional }) => {
  const clasesIcono = estiloAdicional ? `${styles.icono} ${styles['icono-adicional']}` : styles.icono;

  return (
    <a className={clasesIcono} href={href} target="_blank" rel="noreferrer">
      {icono}
    </a>
  );
};