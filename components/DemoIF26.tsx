import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

// Ceci est un composant custom pour la démo react-native de l'UE IF26.
export default function DemoIF26() {
  // react-native recommande TypeScript pour développer de nouveaux projets.
  const [count, setCount] = useState<number>(0);

  // En react-native, on déclare le style directement dans les fichiers source:
  const demoIF26Style = StyleSheet.create({
    text: {
      color: "white",
      textAlign: "center",
    },
    counterText: {
      fontSize: 24,
      fontWeight: "bold",
    },
    buttons: {
      gap: 16,
    },
  });

  // C'est un composant react standard, on peut y utiliser tous les hooks fournis
  // par react sur le web.
  useEffect(() => console.log("Hello, IF26!"), []);

  // Comme en react standard, on retourne du JSX. La seule différence est que nous
  // n'avons pas accès aux composants HTML standards présents sur le Web.
  // react-native donne ses propres composants standards, comme View, Text et Button.
  // Ici, on peut voir le composant View comme l'équivalent d'une 'div' sur le Web.
  return (
    <>
      <View style={{ height: 16 }} />
      <Text style={demoIF26Style.text}>
        Nombre d'élèves aujourd'hui en IF26:
      </Text>
      <Text style={[demoIF26Style.text, demoIF26Style.counterText]}>
        {count}
      </Text>
      <View style={demoIF26Style.buttons}>
        <Button title="+10" onPress={() => setCount(count + 10)} />
        <Button title="+1" onPress={() => setCount(count + 1)} />
        <Button title="-1" onPress={() => setCount(count - 1)} />
        <Button title="-10" onPress={() => setCount(count - 10)} />
        <Button color={"red"} title="RESET" onPress={() => setCount(0)} />
      </View>
    </>
  );
}