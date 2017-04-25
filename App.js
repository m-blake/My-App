import React from 'react';
import {StyleSheet, Text, View, Button, ListView} from 'react-native';
import MapView from 'react-native-maps'

const checkStatus = (response) => {
	if (!response.ok) { // status in the range 200-299 or not
		return Promise.reject(new Error(response.statusText || 'Status not OK'))
	}
	return response
}

const parseJSON = (response) => response.json()

const makeFetch = (url, options) => fetch(url, options).then(checkStatus).then(parseJSON)

//LOADER SCREEN
// class Loader extends React.Component {
//   render(){
//     return (<Text>Loading...</Text>);
//   }
// }

// ARTICLE SCREEN
// class ArticlesScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Articles',
//   };
//
//     constructor(props) {
//       super(props)
//       this.state = {
//         hasFetched: false,
//         dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
//       };
//     }
//   componentDidMount(){
//     makeFetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
//       this.setState(()=> {
//         return {
//           hasFetched: true,
//           dataSource: this.state.dataSource.cloneWithRows(data)
//         };
//       })
//     })
//   }
//   render() {
//     const { hasFetched, dataSource } = this.state;
//     return (
//       <View>
//         {hasFetched ?
//           <ListView
//               dataSource={dataSource}
//               renderRow={(rowData) => <Text>{rowData.title}</Text>}
//             />
//             : <Loader />
//         }
//       </View>
//     );
//   }
// }

class MyComponent extends React.Component {
	render() {c
		const {name} = this.props;
		return (
			<Text>
				{name}
				Says: WOOOOOOT!
			</Text>
		);
	}
}

class Map extends React.Component {
	render(){
		return (
			<View>
				 <View>Hi, I'm going to be a map!</View>
			</View>
		)
	}
}


export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				{/*	<ArticlesScreen /> */}
				<Map /> 
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
