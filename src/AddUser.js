import React from 'react';
import { StyleSheet, 
         Text,
         View,
         TextInput,
         TouchableOpacity
        
    } from 'react-native';

 class AddUser extends React.Component {

  constructor(){
    super();
    this.state ={
      name:'',
      email:'',
      mobile:''
    }
  }
  updateValue(text, field){

    if(field == 'name'){
      this.setState({
        name:text,
      })
    }
    else if(field == 'email'){
      this.setState({
        email:text,
      })
    }
    else if(field == 'mobile'){
      this.setState({
        mobile:text
      })
    }
    console.log(text);
  }

  submit(){

    let collection = {}
      collection.name=this.state.name,
      collection.email=this.state.email,
      collection.mobile=this.state.mobile
      console.warn(collection);
    console.log("submit btn pressed and collection is", collection);

    var url = "http://localhost:3005/save"
       return fetch(url, {
        method: 'POST',
        headers:{
        //   'Accept':'application/json',
        //   'Content-Type': 'application/json',
        //   'Access-Control-Allow-Origin': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        //   // 'Accept':'application/json'
          
        },
        body: JSON.stringify(collection),
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(res => console.log('Success',res))


console.log("====================123");
  }

  render(){
    const {name, email, mobile} = this.state
    return (
        <View style={styles.container}> 
        {/* <Text style={styles.header}>Insert User</Text> */}
          <TextInput 
            placeholder="Enter Name"
            style={styles.textinput}
            onChangeText={(text) => this.updateValue(text, 'name')}
            ></TextInput>

          <TextInput 
            placeholder="Enter Email"
            style={styles.textinput}
            onChangeText={(text) => this.updateValue(text, 'email')}
            ></TextInput>

          <TextInput 
            placeholder="Enter Mobile"
            style={styles.textinput}
            onChangeText={(text) => this.updateValue(text, 'mobile')}
            ></TextInput> 

          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.submit()}  
          >
            <Text style={{color:'white', fontWeight:'bold',fontSize:20}}>Submit</Text>
          </TouchableOpacity>  

        </View>

    );
  }
  
}

const styles = StyleSheet.create({
  regform:{
      alignSelf:'flex-end',
  },
  header:{
      fontSize:24,
      color:'#000',
      alignSelf:'center',
      paddingBottom:10,
      marginBottom:20,
      marginTop:10,
      borderBottomColor:'#199187',
      borderBottomWidth:1,
      


  },
  textinput:{
    alignItems:'stretch',
    height:40,
    width:300,
    marginVertical:10,
    marginHorizontal:10,
    marginBottom:20,
    color:'black',
    fontSize:18,
    borderBottomColor:'gray',
    borderBottomWidth:2,

  },
  btn:{
    alignSelf:'stretch',
    alignItems:'center',
    backgroundColor:'#59cbbd',
    padding:20,
    marginTop:30,


  },
  btntext:{
    color:'#000',
    fontWeight:'bold',
    

  },
});

export default AddUser;