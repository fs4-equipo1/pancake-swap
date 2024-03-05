import styles from "../componentes/JoinComunidad/JoinComunidad.module.scss"

export const joinComunidadCardData = [
    {
        title:(
            <h4>Top Tweet of the week</h4>
        ),
        image:null,
        fecha:null,
        logo: (
        <svg className={styles.logoComunity}viewBox="0 0 198 199"
            width="30" 
            color= "#a881fc" 
            mlns="http://www.w3.org/2000/svg"
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M98.552 198.607c-29.49-.022-53.246-7.027-69.844-19.609C11.91 166.265 3 148.195 3 127.748c0-19.701 8.891-33.907 18.952-43.51 7.884-7.525 16.584-12.344 22.642-15.117-1.37-4.162-3.079-9.61-4.608-15.238-2.046-7.53-4.053-16.366-4.053-22.84 0-7.663 1.687-15.36 6.238-21.34C46.98 3.385 54.218 0 62.926 0c6.806 0 12.584 2.499 17.108 6.81 4.324 4.12 7.202 9.593 9.189 15.298 3.491 10.024 4.85 22.618 5.232 35.187h8.341c.382-12.569 1.741-25.163 5.233-35.187 1.987-5.705 4.865-11.177 9.189-15.298C121.741 2.5 127.519 0 134.325 0c8.708 0 15.947 3.385 20.755 9.703 4.551 5.98 6.239 13.677 6.239 21.34 0 6.474-2.007 15.31-4.054 22.84-1.529 5.628-3.238 11.076-4.608 15.238 6.058 2.773 14.759 7.592 22.643 15.118 10.06 9.602 18.952 23.808 18.952 43.509 0 20.447-8.911 38.517-25.708 51.25-16.598 12.582-40.354 19.587-69.844 19.609h-.148z" fill="#633001"></path>
                <path d="M62.926 7.288c-12.754 0-18.626 9.516-18.626 22.675 0 10.46 6.822 31.408 9.621 39.563.63 1.835-.36 3.844-2.164 4.555-10.222 4.031-40.39 18.789-40.39 52.588 0 35.603 30.658 62.448 87.191 62.49h.135c56.534-.042 87.19-26.887 87.19-62.49 0-33.799-30.167-48.557-40.389-52.588-1.804-.71-2.794-2.72-2.164-4.555 2.799-8.154 9.621-29.103 9.621-39.563 0-13.16-5.871-22.675-18.626-22.675-18.36 0-22.936 26.007-23.263 53.92-.022 1.863-1.528 3.375-3.392 3.375H89.58c-1.863 0-3.37-1.512-3.391-3.375-.326-27.913-4.903-53.92-23.263-53.92z" fill="#D1884F"></path>
                <path d="M98.693 177.755c-41.538 0-87.253-22.235-87.325-51.018v.134c0 35.632 30.705 62.491 87.325 62.491 56.62 0 87.325-26.859 87.325-62.491v-.134c-.072 28.783-45.787 51.018-87.325 51.018z" fill="#FEDC90"></path>
                <path className="eye" d="M75.614 117.896c0 9.718-4.593 14.779-10.258 14.779-5.665 0-10.258-5.061-10.258-14.779s4.593-14.779 10.258-14.779c5.665 0 10.258 5.061 10.258 14.779zM142.288 117.896c0 9.718-4.592 14.779-10.257 14.779-5.666 0-10.258-5.061-10.258-14.779s4.592-14.779 10.258-14.779c5.665 0 10.257 5.061 10.257 14.779z" fill="#633001"></path>
        </svg>),
        subtitle:(
            <div className={styles.verifiContainer}>
                <h4 className={styles.subtitleSwiper}>PancakeSwap🥞Ev3ryone's Favourite D3X</h4>
                <svg className={styles.verificadoSwiper} viewBox="0 0 24 24" 
                ml="3px" 
                mt="9px" 
                color="var(--colors-secondary)" 
                width="20px" 
                xmlns="http://www.w3.org/2000/svg" 
                >
                    <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg>
            </div>
        ),
        socialMedia:(
            <div className={styles.datosInteres}>
                <div className={styles.nombreCuenta}>@PancakeSwap</div>
                <div className={styles.barras}></div>
                <div className={styles.fecha}>Dec 28</div>
                <div className={styles.barras}></div>
                <div className={styles.corazonLikes}>
                    <svg viewBox="0 0 16 16" 
                    width="16" 
                    color="var(--colors-textSubtle)" 
                    mr="2px" 
                    xmlns="http://www.w3.org/2000/svg" 
                    >
                        <g clipPath="url(#clip0_316_14296)">
                            <path d="M13.1067 2.66044C11.3467 1.46044 9.17334 2.02044 8.00001 3.39377C6.82668 2.02044 4.65334 1.45377 2.89334 2.66044C1.96001 3.30044 1.37334 4.38044 1.33334 5.52044C1.24001 8.1071 3.53334 10.1804 7.03334 13.3604L7.10001 13.4204C7.60668 13.8804 8.38668 13.8804 8.89334 13.4138L8.96668 13.3471C12.4667 10.1738 14.7533 8.10044 14.6667 5.51377C14.6267 4.38044 14.04 3.30044 13.1067 2.66044ZM8.06668 12.3671L8.00001 12.4338L7.93334 12.3671C4.76001 9.49377 2.66668 7.59377 2.66668 5.6671C2.66668 4.33377 3.66668 3.33377 5.00001 3.33377C6.02668 3.33377 7.02668 3.99377 7.38001 4.9071H8.62668C8.97334 3.99377 9.97334 3.33377 11 3.33377C12.3333 3.33377 13.3333 4.33377 13.3333 5.6671C13.3333 7.59377 11.24 9.49377 8.06668 12.3671Z"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_316_14296">
                                <rect width="16" height="16"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.numLikes}>1.3K</div>
                <div className={styles.barras}></div>
                <div className={styles.estasimbol}>
                    <svg viewBox="0 0 16 16" 
                    color="var(--colors-textSubtle)" 
                    width="20px" 
                    xmlns="http://www.w3.org/2000/svg" 
                    >
                        <g clipPath="url(#clip0_316_14299)">
                            <path d="M4.26668 6.13301H4.40001C4.91334 6.13301 5.33334 6.55301 5.33334 7.06634V11.733C5.33334 12.2463 4.91334 12.6663 4.40001 12.6663H4.26668C3.75334 12.6663 3.33334 12.2463 3.33334 11.733V7.06634C3.33334 6.55301 3.75334 6.13301 4.26668 6.13301ZM8.00001 3.33301C8.51334 3.33301 8.93334 3.75301 8.93334 4.26634V11.733C8.93334 12.2463 8.51334 12.6663 8.00001 12.6663C7.48668 12.6663 7.06668 12.2463 7.06668 11.733V4.26634C7.06668 3.75301 7.48668 3.33301 8.00001 3.33301ZM11.7333 8.66634C12.2467 8.66634 12.6667 9.08634 12.6667 9.59967V11.733C12.6667 12.2463 12.2467 12.6663 11.7333 12.6663C11.22 12.6663 10.8 12.2463 10.8 11.733V9.59967C10.8 9.08634 11.22 8.66634 11.7333 8.66634Z"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_316_14299">
                                <rect width="16" height="16" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className={styles.numEstadisticas}>179k</div>
            </div>
        ),
        texto:(
            <div className={styles.containerTexto}>
                <div className={styles.textoComunidad}>🐰💙PancakeSwap Fam, the moment is here!
                🥞Proposal to reduce the max supply of $CAKE from 750M to 450M!
                🌟By reducing our token supply by 300,000,000 $CAKE, we signify PancakeSwap’s successful shift from a high-inflation emissions model to the Ultrasound CAKE era.
                </div>
            </div>
            ),
        enlace:(
            <a className={styles.aComunity} target="_blank" rel="noreferrer noopener" href="https://x.com/PancakeSwap/status/1740281555887825335?s=20">Web link 
                <svg className={styles.asvg} viewBox="0 0 24 24" ml="3px" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path>
                </svg>
            </a>
        )
    },
    {
        title:(
            <h4>Latest Blog Post</h4>
        ),
        image:(
          <div className={styles.imagenBlog}></div> 
        ),
        fecha:(
            <div className={styles.fechaBlog}>2024-01-19</div>
        ),
        texto:(
            <div className={styles.textoBlog}>Join the GUI INU Trading Competition on Aptos PancakeSwap and Win $7,000 !</div>
        ),
        subtitle: null,
        socialMedia:null,
        enlace: null,
    }
]
