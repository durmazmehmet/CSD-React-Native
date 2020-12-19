import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

const SimpleCalculateComponent = () => {
    const [firstNumberText, setFirstNumberText] = useState("")
    const [secondNumberText, setSecondNumberText] = useState("")
    const [sumResultText, setSumResultText] = useState("")
    const [multiplyResultText, setMultiplyResultText] = useState("")

    const isAllDigit = text => {
        let len = text.length

        if (len == 0)
            return false

        for (let i = 0; i < len; ++i)
            if (isNaN(parseInt(text[i])))
                return false

        return true
    }

    const isNotAllDigit = text => !isAllDigit(text)

    const clearResultTexts = () => {
        setSumResultText("")
        setMultiplyResultText("")
    }

    const onCalculate = (firstText, secondText) => {
        clearResultTexts()

        if (isNotAllDigit(firstText) || isNotAllDigit(secondText)) {
            setSumResultText("Hatalı girişler")
            setSumResultText("Hatalı girişler")
            return
        }

        let a = parseInt(firstText)
        let b = parseInt(secondText)

        setSumResultText(`${a} + ${b} = ${a + b}`)
        setMultiplyResultText(`${a} * ${b} = ${a * b}`)
    }

    const onClearTouchableOpacityPressed = () => {
        setFirstNumberText("")
        setSecondNumberText("")
        clearResultTexts()
    }

    const onFirstNumberChangeText = text => {
        setFirstNumberText(text)
        onCalculate(text, secondNumberText)
    }

    const onSecondNumberChangeText = text => {
        setSecondNumberText(text)
        onCalculate(firstNumberText, text)
    }

    return (
        <>
            <TextInput style={{width: 150, height: 25, backgroundColor: 'gray'}} value={firstNumberText} onChangeText={onFirstNumberChangeText}
                    placeholder="Birinci sayıyı yazınız"/>
            <TextInput style={{width: 150, height: 25}} value={secondNumberText} onChangeText={onSecondNumberChangeText}
                    placeholder="İkinci sayıyı yazınız"/>
            <Text>{sumResultText}</Text>
            <Text>{multiplyResultText}</Text>
            <TouchableOpacity onPress={onClearTouchableOpacityPressed}>
              <Text style={{width: 150, height: 25, backgroundColor: "red", textAlign: 'center'}}>Temizle</Text>
            </TouchableOpacity>
        </>
    )
}


export {SimpleCalculateComponent}
