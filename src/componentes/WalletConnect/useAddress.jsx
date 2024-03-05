import { useEffect } from "react";
import axios from "axios";
import { useAccount, useDisconnect, useFeeData } from "wagmi";

const useAddress = () => {

  const { address } = useAccount();

  //Fetch de usuario para llamar a la api, y cambiar los datos en mi app, o si no existe, crear uno nuevo
  const fetchUsuario = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3004/users/${address}`
      );

      setUser(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  //funcion que acorta el nombre de la billetera para mostrar en la card del ususario
  const formatAddressUser = (address) => {
    if (typeof address === "string" && address.length >= 8) {
      return `${address.substring(0, 4)}...${address.substring(
        address.length - 4
      )}`;
    } else {
      return "Loading...";
    }
  };

  //función que acorta el nombre de la billetera para mostrar en el boton.
  const formatAddress = (address) => {
    if (typeof address === "string" && address.length >= 6) {
      return `${address.substring(0, 2)}...${address.substring(
        address.length - 4
      )}`;
    } else {
      return "Loading...";
    }
  };

  //UseEffect para manejar el cambio de billetera y hacer el fetch de usuario
  useEffect(() => {
    if (address) {
      console.log(`La billetera connectada es: ${address}`);
      console.log("Cambio la direccion, guarda el usuario en el store model");
      fetchUsuario();
    } else {
      console.log("Billetera desconectada");
    }
  }, [address]);

  return { address, formatAddress, formatAddressUser };
};

export default useAddress;
