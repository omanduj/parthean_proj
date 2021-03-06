import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import quiz_screen from '.components/quiz_menu.js'


const question = (props) => {
    return (
      <View style={{alignItems: 'center'}}>
        <Text style={styles.top_heading}>Quiz: {props.quiz_title}</Text>
        <Text style={styles.heading}>{props.quiz_question}</Text>
      </View>
    );
}

const answers = (props) => {
  return (
    <Card style={styles.options}>
      <Card.Content>
        <TouchableOpacity onPress={handlePressA}>  
          <Text style={styles.button_text}>{props.question_letter}</Text>
          <Text style={styles.button_text_content}>{props.question_response}</Text>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  )
}


export default function App(answer_response) {

  const handlePressA = () => console.log(answer_response);
  const handlePressB = () => console.log("Option B Pressed");
  const handlePressC = () => console.log("Option C Pressed");
  const handlePressD = () => console.log("Option D Pressed");
  const exit_button = () => console.log("Exit Button Pressed");


  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'black', flex: 1, marginBottom: '-30%'}}>

          <SafeAreaView style={styles.container}>
            {/* <Text style={styles.top_heading}>Quiz: Private Keys</Text> */}
            <View style={styles.submitButton}>
              <Button color="white" title='X' onPress={exit_button}></Button>
            </View>
          </SafeAreaView>


          <View>
            <Text style={styles.quiz_tag}>
              Quiz
            </Text>

            <question quiz_title='Quiz: Private Keys' quiz_question='What is the purpose of'/>
            <question quiz_question='the private key?'/>

            {/* <Text style={styles.heading}>
              What is the purpose of 
            </Text> 
            <Text style={styles.heading}>
             the private key?
            </Text> */}

          </View>
          
      </View>

      <View> 
            <Text style={styles.options_subheading}>
              SELECT A CHOICE
            </Text>
            
            <answers question_letter="A" question_response="Steal Tacos"/>
            <answers question_letter="B" question_response="Sign Transactions"/>
            <answers question_letter="C" question_response="Get Free Bagel's"/>
            <answers question_letter="D" question_response="Marry Adam Holmes"/>

            {/* <Card style={styles.options}>
              <Card.Content>
                <TouchableOpacity onPress={handlePressA}>
                  <Text style={styles.button_text}>A</Text>
                  <Text style={styles.button_text_content}>Steal Tacos</Text>
                </TouchableOpacity>
              </Card.Content>
            </Card>

            <Card style={styles.options}>
              <Card.Content>
                <TouchableOpacity onPress={handlePressB}>
                  <Text style={styles.button_text}>B</Text>
                  <Text style={styles.button_text_content}>Sign Transactions</Text>

                </TouchableOpacity>
              </Card.Content>
            </Card>

            <Card style={styles.options}>
            <Card.Content>
                <TouchableOpacity onPress={handlePressC}>
                  <Text style={styles.button_text}>C</Text>
                  <Text style={styles.button_text_content}>Get Free Bagel's</Text>
                </TouchableOpacity>
              </Card.Content>
            </Card>

            <Card style={styles.options}>
              <Card.Content>
              <TouchableOpacity onPress={handlePressD}>
                  <Text style={styles.button_text}>D</Text>
                  <Text style={styles.button_text_content}>Marry Adam Holmes</Text>
                </TouchableOpacity>
              </Card.Content>
            </Card> */}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  options:{
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.8, 
    shadowRadius: 2, 
    elevation: 5,
    top: 120,
    marginTop: '2%',
    marginLeft: '13%',
    width: '75%',
    height: '15%',
    alignSelf: 'flex-start'
  },

  options_subheading: {
    color: "black", 
    marginLeft:'6%', 
    top: 120
  },

  heading: {
    color: "white", 
    fontSize: 25, 
    marginLeft:"7%", 
    bottom: 80,
  },

  quiz_tag: {
    backgroundColor: 'white', 
    width:'15.5%',
    marginLeft:"7%", 
    paddingLeft: "2%", 
    fontSize: 20, 
    bottom: 90, 
    borderRadius: 10, 
    overflow: 'hidden',
  },

  top_heading: {
    color: "white",
    fontSize: 20,
  },

  submitButton: {
    position: 'absolute',
    bottom: 197,
    left: 335,
  },

  button_text: {
    textAlign:'left', 
    fontSize: 18, 
    marginTop: '2.5%',
    fontWeight: "bold"
  },

  button_text_content: {
    textAlign:'left', 
    fontSize: 18, 
    marginTop: '-8.6%',
    marginLeft: '20%'
  }
});