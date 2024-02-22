import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({children}) => {
    const [dataSwiper, setDataSwiper] = useState([]);

    const addWalletInfoToSwiper = (walletInfo) => {
        const newCard = {
            titleText: "Billetera Conectada",
            secondText: `Direccion: ${walletInfo}`
        };

        setDataSwiper(currentData => [...currentData, newCard]);
    };

    return (
        <DataContext.Provider value={{dataSwiper, addWalletInfoToSwiper}}>
            {children}
        </DataContext.Provider>
    )
}