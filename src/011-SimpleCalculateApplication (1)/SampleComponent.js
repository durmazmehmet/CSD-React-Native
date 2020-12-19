import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

const SampleComponent = props => {
    const citiesInfo = [
        {plate: 34, name: "İstanbul"},
        {plate: 35, name: "İzmir"},
        {plate: 6, name: "Ankara"},
        {plate: 67, name: "Zonguldak"}
    ]
    const [cities, setCities] = useState(citiesInfo)
    const [cityName, setCityName] = useState("")
    const [cityPlate, setCityPlate] = useState("")

    const setListView = ci => (
        <TouchableOpacity key={ci.plate} onPress={() => displayCityInfo(ci)}
            style={{width: 100, height:25}}>
            <Text style={{backgroundColor: 'green', textAlign: 'center'}}>{ci.name}</Text>
        </TouchableOpacity>
    )

    const displayCityInfo = cityInfo => alert(`${cityInfo.plate}, ${cityInfo.name}`)

    const onCityNameChangeText = text => setCityName(text)
    const onCityPlateChangeText = text => setCityPlate(text)
    const onOkButtonPressed = () => {
        cities.push({plate: cityPlate, name: cityName})
        setCities(cities)
    }

    return (
        <View>
            <TextInput value={cityName} onChangeText={onCityNameChangeText }/>
            <TextInput value={cityPlate} onChangeText={onCityPlateChangeText }/>
            {
                cities.map((ci, index) => setListView(ci))
            }

            <TouchableOpacity onPress={onOkButtonPressed}
                style={{width: 100, height:25, backgroundColor: 'red'}}>
                <Text style={{textAlign: 'center'}}>Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}


export {SampleComponent}
