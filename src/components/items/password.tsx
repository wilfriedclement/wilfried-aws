/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 18/09/2024 - 18:10:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 18/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import  { useState, useMemo } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");

  // Utilisation de useMemo pour calculer la force du mot de passe
  const passwordStrength = useMemo(() => {
    const length = password.length;
    if (length > 16) return 4; // Très fort
    if (length > 12) return 3;  // Fort
    if (length > 8) return 2;  // Moyen
    if (length > 0) return 1;  // Faible
    return 0; // Vide
  }, [password]);

  // Fonction pour déterminer la couleur en fonction de la force
  const getColor = (level) => {
    if (level <= passwordStrength) {
      return "red"; // Colorer les niveaux atteints
    }
    return "rgba(128, 128, 128, 0.5)"; // Les niveaux non atteints
  };

  return (
    <div className="w-full ">
      <input
      className="w-full bg-[#D9D9D9] rounded-sm border-[0.1rem] border-solid h-[2.2rem] px-4 text-[#71717A]"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <input style={{ backgroundColor: getColor(1) }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: getColor(2) }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: getColor(3) }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: getColor(4) }} readOnly className="w-[5.2rem] rounded-md h-4"/>
      </div>
    </div>
  );
};

export default PasswordStrength;