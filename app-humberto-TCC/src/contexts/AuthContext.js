import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { api } from "../utils/api";

const AuthContext = createContext({});
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem("@AppSolicitaTcc:user");
      const storagedToken = await AsyncStorage.getItem("@AppSolicitaTcc:token");
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorageData();
  });

  async function login(loginDTO) {
    const { data } = await api.post("/login", loginDTO);
    setUser(data.user);

    api.defaults.headers.Authorization = `Baerer ${data.token}`;

    await AsyncStorage.setItem(
      "@AppSolicitaTcc:user",
      JSON.stringify(data.user)
    );
    await AsyncStorage.setItem("@AppSolicitaTcc:token", data.token);
  }

  async function logout() {
    await AsyncStorage.clear();
    setUser(null);
  }

  //MÉTODO PARA DESLOGAR USUÁRIO DEPOIS DE CERTO TEMPO

  // useEffect(() => {
  //     const clearStorage = () => {
  //         try {
  //             logout();
  //         } catch (error) {
  //             console.log(error);
  //         }
  //     };

  //     const id = setInterval(() => {
  //         clearStorage();
  //     }, 43200000);

  //     return () => clearInterval(id);
  // }, [logout]);

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
