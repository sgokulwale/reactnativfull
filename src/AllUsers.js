import React from 'react';
import { StyleSheet, 
         Text,
         View,
         TextInput,
         ScrollView,
         TouchableOpacity
        
    } from 'react-native';

 class AllUsers extends React.Component {

  constructor(props){
    super(props)
    this.state={
      data:[]
    }
  }

   apiHandler =()=> {
      // alert("okkkk")
      //  const url = "https://jsonplaceholder.typicode.com/posts"
      const url = "http://127.0.0.1:3005/"
      return fetch(url,
        {
          method: 'GET',
          
        })
       .then((res)=> res.json())
       .then((resJson)=>{
        //  console.log('res after api call ==>',resJson)
          // alert(JSON.stringify(resJson))
          this.setState({ data : resJson})
       })
   }
  render(){
    const {data } = this.state
    return (
        <View style={styles.container}> 
        {
          data.map((item,index)=>{
            return (
              <View style={styles.viewCon}
              // style={{height:42,width:400,justifyContent:"center", alignItems:"center"}} 
              >


                <Text style={styles.txt}>
                {item.name} {item.mobile} {item.email}</Text>
                
              </View>
            )
          })
        }
        {/* <Text style={styles.header}>Fetch Data</Text> */}
          
          <TouchableOpacity
            style={styles.btn}
            onPress={this.apiHandler} >

            <Text style={{color:'white', fontWeight:'bold',fontSize:20}}>Fetch</Text>
          </TouchableOpacity>  
        </View>

    );
  }
  
}

const styles = StyleSheet.create({
  header:{
      fontSize:24,
      color:'#000',
      paddingBottom:10,
      marginBottom:15,
      borderBottomColor:'#199187',
      borderBottomWidth:1,
      


  },
  viewCon:{
    height:42,
    width:400,
    justifyContent:"center", 
    alignItems:"center", 
              

  },
  container:{

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
   
    alignItems:'center',
    backgroundColor:'#59cbbd',
    padding:20,
    width:300,
    marginTop:30,


  },
  txt:{
    alignItems:'baseline',
    height:40,
    width:300,
    marginVertical:10,
    marginHorizontal:10,
    marginBottom:15,
    color:'black',
    fontSize:15,
  
  },
  btntext:{
    color:'#000',
    fontWeight:'bold',
    

  },
});

export default AllUsers;