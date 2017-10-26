import React from 'react';
import {View, Text, Component, FlatList, StyleSheet, Image} from 'react-native';
import Aliments from '../json/aliments.json';

class Search extends React.Component {

	constructor(props) {
		super(props);
		var arr = [];
		Object.keys(Aliments).forEach(function(key) {
			arr.push(Aliments[key]);
		});

		this.state = {
			aliments: arr
		};
	}

	componentDidMount() {
		
	}

	render() {

		return (
			<FlatList className="flatList"
			data={this.state.aliments}
			renderItem={({item}) => <Text>{item.nom}</Text>}
			/>
			);
		}

	}

	const styles:StyleSheet = StyleSheet.create({
		flatList: {
			position          : "relative",
			flexDirection     : "row", // <---------- 'row' || 'column'
			flexWrap          : "wrap",
			alignSelf         : "stretch",
			top               : 0,
			height            : 600,
			backgroundColor   : "transparent",
			overflow          : "hidden",
		},
		column: {
			flex              : 1,
			flexDirection     : "row",
			alignSelf         : "stretch",
			alignItems        : "flex-start",
			justifyContent    : "flex-start",
			backgroundColor   : "red",
			position          : "relative",
			margin			  : 10,
			// height            : 1250,
		},


	});

		export default Search;
