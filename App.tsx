import React, { useEffect, useState } from "react";
import { AppBar, Button, ListItem, Stack } from "@react-native-material/core";
import { ChildrenResponse } from "./src/integrations/services/childrens/responses/children.response";
import { getAllChildrens } from "./src/integrations/services/childrens/children.service";
import { ActivityIndicator, Text, View } from "react-native";
import { getKeyByValue } from "./src/utils/Utils";

const App = () => {
  const [childrens, setChildrens] = useState<ChildrenResponse[]>([])
  const [load, setLoad] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    setLoad(true)
    getAllChildrens('/api/childrens').then(res => setChildrens(res.items)).catch(error => setError(error))
    setLoad(false)
  }, [])

  if (!load) {
    return (
      <>
      <AppBar 
        title="Palavra Fest 2022" 
        subtitle="Os Profetas da Bíblia." 
        style={{ height: 80, justifyContent: "center", alignItems: "center"}}
      />
        {error ? <Text>Erro ao listar dados</Text> : childrens.map(children => {
          return (
            <ListItem 
              key={children.id}
              title={children.name} 
              secondaryText={children.birhdate}
            />
          )
        })}
        <Stack fill center spacing={10}>
          <Button title="Cadastrar" />
        </Stack>
      </>
    )
  } else {
    return (
    <Stack fill center spacing={4}>
      <ActivityIndicator size="large" color="#00ff00" />
    </Stack>
    )
  }  
}

export default App;