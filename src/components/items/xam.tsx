/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 07/09/2024 - 20:15:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 07/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import React, { useState } from "react";
import { Input, Form, FormItem, FormControl, Label } from "@/components/ui/form";

const PasswordInputProgress = () => {
  const [password, setPassword] = useState("");

  // Fonction pour calculer la progression en fonction de la longueur du mot de passe
  const calculateProgress = () => {
    const length = password.length;
    if (length === 0) return 0;
    if (length <= 4) return 1;
    if (length <= 8) return 2;
    if (length <= 12) return 3;
    return 4;
  };

  const progress = calculateProgress();

  // Retourne la couleur de l'input en fonction de la progression
  const getInputColor = (index: number) => {
    if (index < progress) {
      switch (progress) {
        case 1:
          return "border-red-500"; // Rouge
        case 2:
          return "border-yellow-500"; // Jaune
        case 3:
          return "border-blue-500"; // Bleu
        case 4:
          return "border-green-500"; // Vert
        default:
          return "border-gray-300"; // Grisé par défaut
      }
    }
    return "border-gray-300"; // Si non progressé, gris
  };

  return (
    <Form>
      <FormItem>
        <Label>Mot de passe</Label>
        <FormControl>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            className="mb-4"
          />
        </FormControl>
      </FormItem>

      {/* Les 4 inputs représentant la progression */}
      <div className="flex space-x-2">
        {[...Array(4)].map((_, index) => (
          <Input
            key={index}
            type="text"
            disabled
            className={`w-10 h-10 border-2 rounded ${getInputColor(index)}`} // Ajout de la couleur de la bordure
          />
        ))}
      </div>
    </Form>
  );
};

export default PasswordInputProgress;