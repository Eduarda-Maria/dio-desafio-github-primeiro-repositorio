import React from "react";
import {
  View,
  Image,
  StyleSheet, 
  SafeAreaView, 
  StatusBar, 
  Text,
  Pressable,
  Linking,
} from "react-native";

const colorGithub = "#010409";
const colorFontGithub = "#C9D1D9";
const colorDarkFontGithub = "#8B949E";
const colorgreenDark = "#0E4429";
const colorgreen = "#39D353";
const imageProfileGithub = "https://avatars.githubusercontent.com/u/96659101?v=4";
const uriToMyGithub = "https://github.com/Eduarda-Maria";

const App = () => {
  const handlePressGoToGithub = async ()=>{
    console.log("Verificando link");
    const res = await Linking.canOpenURL(uriToMyGithub);
    if(res){
      console.log("link aprovado");
      console.log("Abrindo o link....");
      await Linking.openURL(uriToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container} >
      <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
      <View style={style.content}>
        <Image accessibilityLabel="imagem de eduarda em avatar" style={style.avatar} source={{uri: imageProfileGithub}}/>
        <Text accessibilityLabel="nome: Eduarda Maria" style={[style.defaultText, style.name] }>Eduarda Maria</Text>
        <Text accessibilityLabel="nickname: Eduarda-Maria" style={style.nickname }>Eduarda-Maria</Text>
        <Text accessibilityLabel="Description: Front End Development Student" style={[style.defaultText, style.description]}>Front End Development Student</Text>

        <View style={style.flexcontaine}>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
        </View>
        <View style={style.flexcontaine}>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
        </View>
        <View style={style.flexcontaine}>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
        </View>
        <View style={style.flexcontaine}>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
        </View>
        <View style={style.flexcontaine}>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItenscolor}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>

        </View>
        <View style={style.flexcontaine}>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
          <Text style={style.flexItens}></Text>
        </View>

        <Pressable onPress={ handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
          </View>
        </Pressable>
       </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container:{ //colunm
    backgroundColor: colorGithub,
    flex:1, //Expandir para a tela inteira
    justifyContent:"center",
  },
  content:{
    alignItems:'center',
    padding: 20,
  },
  avatar:{
    height:200,
    width:200,
    borderRadius:100,
    borderColor:'gray',
    borderWidth:2,
  },
  defaultText:{
    color: colorFontGithub,
  },
  name:{
    fontSize:24,
    fontWeight:"bold",
  },
  nickname:{
    fontSize:18,
    color:colorDarkFontGithub,
  },
  description:{
    fontWeight:"bold",
    fontSize:14,
  },
  button:{
    backgroundColor: colorDarkFontGithub,
    borderRadius:10,
    marginTop:20,
    padding:15,
  },
  textButton: {
    fontWeight:"bold",
    fontSize: 16,
  },
  flexcontaine:{
    display:"flex",
    flexDirection:"row",
  },
  flexItens:{
    borderRadius:100,
    backgroundColor:colorgreenDark,
    margin:.95,
    paddingLeft:15,
  },
  flexItenscolor:{
    backgroundColor:colorgreen,
    margin:.95,
    paddingLeft:15,
    borderRadius:100,
  }
})